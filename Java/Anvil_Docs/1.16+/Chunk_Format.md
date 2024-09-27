# Chunk Format

## Byte Order

Chunk data is stored in **Big Endian** byte order unless mentioned otherwise.

## Chunk NBT Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| DataVersion | IntTag | Version of the chunk NBT structure. |
| Level | CompoundTag | Chunk Data |

***Level Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| xPos | IntTag | X position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). |
| zPos | IntTag | Z position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region).|
| Status | StringTag | Defines the world generation status of this chunk. <br>It is always one of the following: `empty`, `structure_starts`, `structure_references`, `biomes`, `noise`, `surface`, `carvers`, `liquid_carvers`, `features`, `light`, `spawn`, `heightmaps`, or `full`. <br>All status except `full` are used for chunks called proto-chunks, in other words, for chunks with incomplete generation. |
| LastUpdate | LongTag | Tick when the chunk was last saved. |
| InhabitedTime | LongTag | The cumulative number of ticks players have been in this chunk. Note that this value increases faster when more players are in the chunk. Used for Regional Difficulty. |
| Biomes | IntArrayTag | 1024 entries of biome data. Each number in the array is the [biome id](https://minecraft.wiki/w/Biome/ID?oldid=2056801) for a 4×4×4 volume in the chunk. These 4×4×4 volumes are arranged by Z, then X, then Y. That is, the first 4×4 values in the array are for the 16×16 chunk, at Y levels 0-3, the next 4×4 is for Y levels 4-7, etc. If this tag does not exist, it gets created and filled by Minecraft. |
| [Heightmaps](#heightmaps-data) | CompoundTag | Several different heightmaps corresponding to 256 values compacted at 9 bits per word (lowest being 0, highest being 256, both inclusive). |
| [Sections](#section-data) | ListTag of CompoundTags | Each CompoundTag is a section (also known as subchunk). All sections in the world's height are present in this list. Empty sections are not stored. |
| [Entities](#entities-data) | ListTag of CompoundTags | Each CompoundTag in this list defines a entity in this chunk. (Removed in 1.17) |
| [TileEntities](#tile-entities-data) | ListTag of CompoundTags | Each CompoundTag in this list defines a block entity in this chunk. |
| [TileTicks](#tile-ticks-data) | ListTag of CompoundTags | Each CompoundTag in this list is an "active" block in this chunk waiting to be updated. |
| [LiquidTicks](#tile-ticks-data) | ListTag of CompoundTags | Each CompoundTag in this list is an "active" liquid in this chunk waiting to be updated. |
| Lights | ListTag of 16 ListTags of ShortTags | |
| LiquidsToBeTicked | ListTag of 16 ListTags of ShortTags | |
| ToBeTicked | ListTag of 16 ListTags of ShortTags | |
| PostProcessing | ListTag of 16 ListTags of ShortTags | |
| [Structures](#structures-data) | CompoundTag | Structure data in this chunk. |

### Heightmaps Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| MOTION_BLOCKING | LongArrayTag | The highest block that blocks motion or contains a fluid. Longs are stored in **Little Endian** |
| MOTION_BLOCKING_NO_LEAVES | LongArrayTag | The highest block that blocks motion, contains a fluid, or is in the `minecraft:leaves` tag. Longs are stored in **Little Endian** |
| OCEAN_FLOOR | LongArrayTag | The highest block that is neither air or a fluid. Longs are stored in **Little Endian** |
| OCEAN_FLOOR_WG | LongArrayTag | The highest block that is neither air or a fluid, for worldgen. Longs are stored in **Little Endian** |
| WORLD_SURFACE | LongArrayTag | The highest non-air block. Longs are stored in **Little Endian** |
| WORLD_SURFACE_WG | LongArrayTag | The highest non-air block, for worldgen. Longs are stored in **Little Endian** |

### Section Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Y | ByteTag | The Y position of this section. |
| <a id="palette"></a> Palette | ListTag of CompoundTags | Set of different block states used in this particular section. |
| <a id="block-states"></a> BlockStates | LongArrayTag | A packed array of 4096 indices pointing to the palette, stored in an array of longs. Longs are stored in **Little Endian** |
| BlockLight | ByteArrayTag | 2048 ByteTags storing the amount of block-emitted light in each block, Omitted if no light reaches this section of the chunk. Stored 4 bits per block. |
| SkyLight | ByteArrayTag | 2048 ByteTags storing the maximum sky light that reaches each block, Omitted if no sky light reaches this section of the chunk or the bottom 16×16 of the section above this one. Stored 4 bits per block. |

***Palette Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Name | StringTag | Block resource location. |
| Properties | CompoundTag | List of block state properties. Omitted if block has no properties. |

### Entities Data

An entities data. See the [Minecraft Wiki page](https://minecraft.wiki/w/Chunk_format?oldid=1848747#Entity_format) for details.

### Tile Entities Data

A tile entities data. See the [Minecraft Wiki page](https://minecraft.wiki/w/Chunk_format?oldid=1848747#Block_entity_format) for details.

### Tile Ticks Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| i | StringTag | The ID of the block; used to activate the correct block update procedure. |
| p | IntTag | If multiple tile ticks are scheduled for the same tick, tile ticks with lower `p` are processed first. If they also have the same `p`, order is unknown. |
| t | IntTag | The number of ticks until processing should occur. May be negative when processing is overdue. |
| x | IntTag | X position. |
| y | IntTag | Y position. |
| z | IntTag | Z position. |

### Structures Data

Structure data in this chunk. See NBT structure for structures on the [Minecraft Wiki page](https://minecraft.wiki/w/Chunk_format?oldid=1848747#NBT_structure) for more details.

<hr style="height:5px;margin-top:25px">

## Parsing the Chunk

### Parsing the Blocks

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Bits Per Word | 32-bit integer | `64 - leadingZeros(palette.len())` |
| Blocks Per Word | 32-bit integer | `floor(64 ÷ Bits Per Word)` |
| Block Indices | 32-bit integer array. Size = ceil(4096 ÷ ***Blocks Per Word***) × ***Blocks Per Word*** | Extract ***Blocks Per Word*** indices of ***Bits Per Word*** bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

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
