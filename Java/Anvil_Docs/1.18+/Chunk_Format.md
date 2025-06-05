# Chunk Format

## Byte Order

Chunk data is stored in **Big Endian** byte order unless mentioned otherwise.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **DataVersion**: Version of the chunk NBT structure. {.nbt .int}
    * **xPos**: X position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). {.nbt .int}
    * **yPos**: Lowest Y section position in the chunk (e.g. `-4` in 1.18). {.nbt .int}
    * **zPos**: Z position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). {.nbt .int}
    * **Status**: Defines the world generation status of this chunk. <br>It is always one of the following: `minecraft:empty`, `minecraft:structure_starts`, `minecraft:structure_references`, `minecraft:biomes`, `minecraft:noise`, `minecraft:surface`, `minecraft:carvers`, `minecraft:features`, `minecraft:light`, `minecraft:spawn`, or `minecraft:full`. <br>All status except `minecraft:full` are used for chunks called proto-chunks, in other words, for chunks with incomplete generation. {.nbt .string}
    * **LastUpdate**: Tick when the chunk was last saved. {.nbt .long}
    * **InhabitedTime**: The cumulative number of ticks players have been in this chunk. Note that this value increases faster when more players are in the chunk. Used for Regional Difficulty. {.nbt .long}
    * <a id="heightmaps-data"></a> **Heightmaps**: Several different heightmaps corresponding to 256 values compacted at 9 bits per word (lowest being 0, highest being 384, both inclusive). {.nbt .compound}
        * **MOTION_BLOCKING**: The highest block that blocks motion or contains a fluid. Longs are stored in **Little Endian** {.nbt .longArray}
        * **MOTION_BLOCKING_NO_LEAVES**: The highest block that blocks motion, contains a fluid, or is in the `minecraft:leaves` tag. Longs are stored in **Little Endian** {.nbt .longArray}
        * **OCEAN_FLOOR**: The highest block that is neither air or a fluid. Longs are stored in **Little Endian** {.nbt .longArray}
        * **OCEAN_FLOOR_WG**: The highest block that is neither air or a fluid, for worldgen. Longs are stored in **Little Endian** {.nbt .longArray}
        * **WORLD_SURFACE**: The highest non-air block. Longs are stored in **Little Endian** {.nbt .longArray}
        * **WORLD_SURFACE_WG**: The highest non-air block, for worldgen. Longs are stored in **Little Endian** {.nbt .longArray}
    * **sections**: Each CompoundTag is a section (also known as subchunk). All sections in the world's height are present in this list, even those that are empty (filled with air) {.nbt .list}
        * An individual section. {.nbt .compound}
            * **Y**: The Y position of this section. {.nbt .byte}
            * **block_states**: {.nbt .compound}
                * <a id="block-palette"></a> **palette**: Set of different block states used in this particular section. {.nbt .list}
                    * A block state. {.nbt .compound}
                        * **Name**: Block resource location. {.nbt .string}
                        * **Properties**: List of block state properties. Omitted if block has no properties. {.nbt .compound}
                            * ***Name***: The block state name and it's value. {.nbt .string}
                * <a id="block-indices"></a> **data**: A packed array of 4096 indices pointing to the palette, stored in an array of longs. Omitted if only 1 block state fills the entire section. Longs are stored in **Little Endian** {.nbt .longArray}
            * **biomes**: {.nbt .compound}
                * <a id="biome-palette"></a> **palette**: Set of different biomes used in this particular section. {.nbt .compound}
                    * **Name**: Biome resource location. {.nbt .string}
                * <a id="biome-indices"></a> **data**: A packed array of 64 indices pointing to the palette, stored in an array of longs. Omitted if only 1 biome fills the entire section. Longs are stored in **Little Endian** {.nbt .longArray}
            * **BlockLight**: 2048 ByteTags storing the amount of block-emitted light in each block, Omitted if no light reaches this section of the chunk. Stored 4 bits per block. {.nbt .byteArray}
            * **SkyLight**: 2048 ByteTags storing the maximum sky light that reaches each block, If missing look at the bottom 16x16 of light data of the section directly above and repeat that 16 times top down to recompute the data for this section, if there is no section above the current one the section should be set to be completely bright (`0xFF` for each byte). Stored 4 bits per block. {.nbt .byteArray}
    * **block_entities**: Each CompoundTag in this list defines a block entity in this chunk. See [Block Entity format](https://minecraft.wiki/w/Chunk_format#Block_entity_format) for details. {.nbt .list}
    * **block_ticks**: Each CompoundTag in this list is an "active" block in this chunk waiting to be updated. See [Tile Tick format](#tile-ticks-data) below. {.nbt .list}
    * **fluid_ticks**: Each CompoundTag in this list is an "active" liquid in this chunk waiting to be updated. See [Tile Tick format](#tile-ticks-data) below. {.nbt .list}
    * **blending_data**: This appears to be biome blending data, although more testing is needed to confirm. {.nbt .compound}
        * **min_section**: This appears to be the highest chunk section the chunk has. {.nbt .int}
        * **max_section**: This appears to be the lowest chunk section the chunk has. {.nbt .int}
        * **old_noise**: 1 or 0 (true/false), true if this chunk should be blended with neighboring chunks without this tag. {.nbt .byte}
    * **structures**: Structure data in this chunk. See [Structure format](https://minecraft.wiki/w/Chunk_format#NBT_structure) for details. {.nbt .compound}

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

Indexing the [block palette](#block-palette) should look something like this: `palette.get(block_indices[xzy_index])`

### Parsing the Biomes

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Bits Per Index | 32-bit integer | `64 - leadingZeros(palette.len())` |
| Blocks Per Index | 32-bit integer | `floor(64 ÷ Bits Per Index)` |
| Block Indices | 32-bit integer array. Size = ceil(64 ÷ ***Blocks Per Index***) × ***Blocks Per Index*** | Extract ***Blocks Per Index*** indices of ***Bits Per Index*** bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZY order (X increments first).

The index can be calculated with `(Y >> 2 & 0x3) × 16 + (Z >> 2 & 0x3) × 4 + (X >> 2 & 0x3)`.

Indexing the [biome palette](#biome-palette) should look something like this: `palette.get(biome_indices[xzy_index])`

### Parsing the Heightmaps

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Block Indices | 32-bit integer array. Size = 259 (Only 256 indices used) | Extract 7 indices of 9 bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZ order (X increments first).

The index can be calculated with `Z × 16 + X`.

Indexing the [heightmap arrays](#heightmaps-data) should look something like this: `heightmap[xz_index] - 64`. Subtract 64 to get the real Y coordinate, otherwise Y-64 with be Y0

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Chunk_format) with some wording tweaked and/or simplify
