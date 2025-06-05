# Chunk Format

## Byte Order

Chunk data is stored in **Big Endian** byte order unless mentioned otherwise.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **DataVersion**: Version of the chunk NBT structure. {.nbt .int}
    * **Level**: Chunk data. {.nbt .compound}
        * **xPos**: X position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). {.nbt .int}
        * **zPos**: Z position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). {.nbt .int}
        * **LastUpdate**: Tick when the chunk was last saved. {.nbt .long}
        * **InhabitedTime**: The cumulative number of ticks players have been in this chunk. Note that this value increases faster when more players are in the chunk. Used for Regional Difficulty. {.nbt .long}
        * **Biomes**: 1024 entries of biome data. Each number in the array is the [biome id](https://minecraft.wiki/w/Biome/ID?oldid=2056801) for a 4×4×4 volume in the chunk. These 4×4×4 volumes are arranged by Z, then X, then Y. That is, the first 4×4 values in the array are for the 16×16 chunk, at Y levels 0-3, the next 4×4 is for Y levels 4-7, etc. If this tag does not exist, it gets created and filled by Minecraft. {.nbt .intArray}
        * <a id="heightmaps-data"></a>**Heightmaps**: Several different heightmaps corresponding to 256 values compacted at 9 bits per index (lowest being 0, highest being 256, both inclusive). {.nbt .compound}
            * **MOTION_BLOCKING**: The highest block that blocks motion or contains a fluid. Longs are stored in **Little Endian** {.nbt .longArray}
            * **MOTION_BLOCKING_NO_LEAVES**: The highest block that blocks motion, contains a fluid, or is in the `minecraft:leaves` tag. Longs are stored in **Little Endian** {.nbt .longArray}
            * **OCEAN_FLOOR**: The highest block that is neither air or a fluid. Longs are stored in **Little Endian** {.nbt .longArray}
            * **OCEAN_FLOOR_WG**: The highest block that is neither air or a fluid, for worldgen. Longs are stored in **Little Endian** {.nbt .longArray}
            * **WORLD_SURFACE**: The highest non-air block. Longs are stored in **Little Endian** {.nbt .longArray}
            * **WORLD_SURFACE_WG**: The highest non-air block, for worldgen. Longs are stored in **Little Endian** {.nbt .longArray}
        * **Sections**: Each CompoundTag is a section (also known as subchunk). All sections in the world's height are present in this list. Empty sections are not stored. {.nbt .list}
            * An individual section. {.nbt .compound}
                * **Y**: The Y position of this section. {.nbt .byte}
                * <a id="palette"></a>**Palette**: Set of different block states used in this particular section. {.nbt .list}
                    * A block state. {.nbt .compound}
                        * **Name**: Block resource location. {.nbt .string}
                        * **Properties**: List of block state properties. Omitted if block has no properties. {.nbt .compound}
                            * ***Name***: The block state name and it's value. {.nbt .string}
                * <a id="block-states"></a>**BlockStates**: A packed array of 4096 indices pointing to the palette, stored in an array of longs. Longs are stored in **Little Endian** {.nbt .longArray}
                * **BlockLight**: 2048 ByteTags storing the amount of block-emitted light in each block, Omitted if no light reaches this section of the chunk. Stored 4 bits per block. {.nbt .byteArray}
                * **SkyLight**: 2048 ByteTags storing the maximum sky light that reaches each block, Omitted if no sky light reaches this section of the chunk or the bottom 16×16 of the section above this one. Stored 4 bits per block. {.nbt .byteArray}
        * **Entities**: Each CompoundTag in this list defines a entity in this chunk (Removed in 1.17). See [Entity format](https://minecraft.wiki/w/Chunk_format?oldid=1848747#Entity_format) for details. {.nbt .list}
        * **TileEntities**: Each CompoundTag in this list defines a block entity in this chunk. See [Tile Entity format](https://minecraft.wiki/w/Chunk_format?oldid=1848747#Block_entity_format) for details. {.nbt .list}
        * **TileTicks**: Each CompoundTag in this list is an "active" block in this chunk waiting to be updated. See [Tile Tick format](#tile-ticks-data) below. {.nbt .list}
        * **LiquidTicks**: Each CompoundTag in this list is an "active" liquid in this chunk waiting to be updated. See [Tile Tick format](#tile-ticks-data) below. {.nbt .list}
        * **Lights**: List of 16 Lists of ShortTags. {.nbt .list}
        * **LiquidsToBeTicks**: List of 16 Lists of ShortTags. {.nbt .list}
        * **ToBeTicked**: List of 16 Lists of ShortTags. {.nbt .list}
        * **PostProcessing**: List of 16 Lists of ShortTags. {.nbt .list}
        * **Status**: Defines the world generation status of this chunk. <br>It is always one of the following: `empty`, `structure_starts`, `structure_references`, `biomes`, `noise`, `surface`, `carvers`, `liquid_carvers`, `features`, `light`, `spawn`, `heightmaps`, or `full`. <br>All status except `full` are used for chunks called proto-chunks, in other words, for chunks with incomplete generation. {.nbt .string}
        * **Structures**: Structure data in this chunk. See [Structure format](https://minecraft.wiki/w/Chunk_format?oldid=1848747#NBT_structure) for details. {.nbt .compound}

</div>

### Tile Ticks Data

<div id="treeview">

* An active block. {.nbt .compound}
    * **i**: The ID of the block; used to activate the correct block update procedure. {.nbt .string}
    * **p**: If multiple tile ticks are scheduled for the same tick, tile ticks with lower `p` are processed first. If they also have the same `p`, order is unknown. {.nbt .int}
    * **t**: The number of ticks until processing should occur. May be negative when processing is overdue. {.nbt .int}
    * **x**: X position. {.nbt .int}
    * **y**: Y position. {.nbt .int}
    * **z**: Z position. {.nbt .int}

</div>

## Parsing the Chunk

### Parsing the Blocks

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Bits Per Index | 32-bit integer | `64 - leadingZeros(palette.len())` |
| Blocks Per Index | 32-bit integer | `floor(64 ÷ Bits Per Index)` |
| Block Indices | 32-bit integer array. Size = ceil(4096 ÷ ***Blocks Per Index***) × ***Blocks Per Index*** | Extract ***Blocks Per Index*** indices of ***Bits Per Index*** bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZY order (X increments first).

The index can be calculated with `Y × 16 × 16 + Z × 16 + X`.

Indexing the [block palette](#palette) should look something like this: `palette.get(block_indices[xzy_index])`

### Parsing the Biomes

Loop the biome id array in XZY order (X increments first).

The index can be calculated with `(Y >> 2 & 0x3) × 16 + (Z >> 2 & 0x3) × 4 + (X >> 2 & 0x3)`.

Indexing the biomes is like a normal array: `biomes[xzy_index]`.

### Parsing the Heightmaps

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Block Indices | 32-bit integer array. Size = 259 (Only 256 indices used) | Extract 7 indices of 9 bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZ order (X increments first).

The index can be calculated with `Z × 16 + X`.

Indexing the [heightmap arrays](#heightmaps-data) is like a normal array: `heightmap[xz_index]`.

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from an old version of this [Minecraft wiki page](https://minecraft.wiki/w/Chunk_format?oldid=1848747) with some wording tweaked and/or simplify
