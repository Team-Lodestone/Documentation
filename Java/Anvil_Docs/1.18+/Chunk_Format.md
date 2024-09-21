# Chunk Format

## Byte Order

Chunk data is stored in **Big Endian** byte order.

## Chunk NBT Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| DataVersion | IntTag | Version of the chunk NBT structure. |
| xPos | IntTag | X position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region). |
| yPos | IntTag | Lowest Y section position in the chunk (e.g. `-4` in 1.18). |
| zPos | IntTag | Z position of the chunk (in absolute chunks from `x`, `z` origin, not relative to the region).|
| Status | StringTag | Defines the world generation status of this chunk. <br>It is always one of the following: `minecraft:empty`, `minecraft:structure_starts`, `minecraft:structure_references`, `minecraft:biomes`, `minecraft:noise`, `minecraft:surface`, `minecraft:carvers`, `minecraft:features`, `minecraft:light`, `minecraft:spawn`, or `minecraft:full`. <br>All status except `minecraft:full` are used for chunks called proto-chunks, in other words, for chunks with incomplete generation. |
| LastUpdate | LongTag | Tick when the chunk was last saved. |
| [sections](#section-data) | ListTag of CompoundTags | Each CompoundTag is a section (also known as subchunk). All sections in the world's height are present in this list, even those that are empty (filled with air). |
| [block_entities](#block-entities-data) | ListTag of CompoundTags | Each CompoundTag in this list defines a block entity in this chunk. |
| [Heightmaps](#heightmaps-data) | CompoundTag | Several different heightmaps corresponding to 256 values compacted at 9 bits per word (lowest being 0, highest being 384, both inclusive). |
| [fluid_ticks](#fluid-ticks-data) | ListTag of CompoundTags | Each CompoundTag in this list is an "active" liquid in this chunk waiting to be updated. |
| [block_ticks](#block-ticks-data) | ListTag of CompoundTags | ListTag of CompoundTags | Each CompoundTag in this list is an "active" block in this chunk waiting to be updated.|
| InhabitedTime | LongTag | The cumulative number of ticks players have been in this chunk. Note that this value increases faster when more players are in the chunk. Used for Regional Difficulty. |
| [blending_data](#blending-data) | CompoundTag | This appears to be biome blending data, although more testing is needed to confirm. |
| [structures](#structures-data) | CompoundTag | Structure data in this chunk. |

### Section Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Y | ByteTag | The Y position of this section. |
| block_states | CompoundTag | -- |
| biomes | CompoundTag | -- |
| BlockLight | ByteArrayTag | 2048 ByteTags storing the amount of block-emitted light in each block, Omitted if no light reaches this section of the chunk. Stored 4 bits per block. |
| SkyLight | ByteArrayTag | 2048 ByteTags storing the maximum sky light that reaches each block, If missing look at the bottom 16x16 of light data of the section directly above and repeat that 16 times top down to recompute the data for this section, if there is no section above the current one the section should be set to be completely bright (`0xFF` for each byte). Stored 4 bits per block. |

***Block States Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| <a id="block-palette"></a> palette | ListTag of CompoundTags | Set of different block states used in this particular section. |
| <a id="block-indices"></a> data | LongArrayTag | A packed array of 4096 indices pointing to the palette, stored in an array of longs. Omitted if only 1 block state fills the entire section. |

***Block Palette Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Name | StringTag | Block resource location. |
| Properties | CompoundTag | List of block state properties. Omitted if block has no properties. |

***Biomes Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| <a id="biome-palette"></a> palette | ListTag of StringTags | Biome resource location. |
| <a id="biome-indices"></a> data | LongArrayTag | A packed array of 64 indices pointing to the palette, stored in an array of longs. Omitted if only 1 biome fills the entire section.|

### Block Entities Data

A block entities data. See the [Minecraft Wiki page](https://minecraft.wiki/w/Chunk_format#Block_entity_format) for details.

### Heightmaps Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| MOTION_BLOCKING | LongArrayTag | -- |
| MOTION_BLOCKING_NO_LEAVES | LongArrayTag | -- |
| OCEAN_FLOOR | LongArrayTag | -- |
| OCEAN_FLOOR_WG | LongArrayTag | -- |
| WORLD_SURFACE | LongArrayTag | -- |
| WORLD_SURFACE_WG | LongArrayTag | -- |

### Fluid Ticks Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| i | StringTag | The ID of the block; used to activate the correct block update procedure. |
| p | IntTag | If multiple fluid ticks are scheduled for the same tick, fluid ticks with lower `p` are processed first. If they also have the same `p`, order is unknown. |
| t | IntTag | The number of ticks until processing should occur. May be negative when processing is overdue. |
| x | IntTag | X position. |
| y | IntTag | Y position. |
| z | IntTag | Z position. |

### Block Ticks Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| i | StringTag | The ID of the block; used to activate the correct block update procedure. |
| p | IntTag | If multiple block ticks are scheduled for the same tick, block ticks with lower `p` are processed first. If they also have the same `p`, order is unknown. |
| t | IntTag | The number of ticks until processing should occur. May be negative when processing is overdue. |
| x | IntTag | X position. |
| y | IntTag | Y position. |
| z | IntTag | Z position. |

### Blending Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| min_section | IntTag | Unknown |
| max_section | IntTag | Unknown |

### Structures Data

Structure data in this chunk. See NBT structure for structures on the [Minecraft Wiki page](https://minecraft.wiki/w/Chunk_format#NBT_structure) for more details.

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

Indexing the [block palette](#block-palette) should look something like this: `palette.get(block_indices[xzy_index])`

### Parsing the Biomes

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Bits Per Word | 32-bit integer | `64 - leadingZeros(palette.len())` |
| Blocks Per Word | 32-bit integer | `floor(64 ÷ Bits Per Word)` |
| Block Indices | 32-bit integer array. Size = ceil(64 ÷ ***Blocks Per Word***) × ***Blocks Per Word*** | Extract ***Blocks Per Word*** indices of ***Bits Per Word*** bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZY order (X increments first).

The index can be calculated with `(Y >> 2 & 0x3) × 16 + (Z >> 2 & 0x3) × 4 + (X >> 2 & 0x3)`.

Indexing the [biome palette](#biome-palette) should look something like this: `palette.get(biome_indices[xzy_index])`

### Parsing the Heightmaps

***Variables you'll need to calculate first***

| Name | Type | Formula |
|------|------|---------|
| Block Indices | 32-bit integer array. Size = ceil(256 ÷ 7) × 7 | Extract 7 indices of 9 bits from each 64-bit integer and store them as their own index in the new 32-bit integer array |

Now that you have all the needed variables you can now loop the palette in XZ order (X increments first).

The index can be calculated with `Z × 16 + X`.

Indexing the [heightmap arrays](#heightmaps-data) sshould look something like this: `heightmap[xz_index] - 64`. Subtract 64 to get the real Y coordinate, otherwise Y-64 with be Y0
