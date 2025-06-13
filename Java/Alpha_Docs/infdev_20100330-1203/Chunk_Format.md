# Chunk Format

## Byte Order

The chunk format is stored in **Big Endian** byte order.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **Level**: {.nbt .compound}
        * **xPos**: The X chunk coordinate. {.nbt .int}
        * **zPos**: The Z chunk coordinate. {.nbt .int}
        * **TerrainPopulated**: 1 or 0 (true/false) - true if special features have generated in this chunk such as trees, flowers, dungeons, etc. {.nbt .byte}
        * **LastUpdate**: The tick when the chunk was last updated. {.nbt .long}
        * **Blocks**: 32768 bytes of block IDs, 8 bits per block. Stored in YZX order (Y increments first)[\[1\]](#1) {.nbt .byteArray}
        * **Data**: 16384 bytes of block data, 4 bits per block. Stored in YZX order (Y increments first)[\[2\]](#2) {.nbt .byteArray}
        * **BlockLight**: 16384 bytes of block light data, 4 bits per block. Stored in YZX order (Y increments first)[\[2\]](#2) {.nbt .byteArray}
        * **SkyLight**: 16384 bytes of sky light data, 4 bits per block. Stored in YZX order (Y increments first)[\[2\]](#2) {.nbt .byteArray}
        * **HeightMap**: 256 bytes of height map information, 8 bits per XZ column. Used for speeding up sky light calculations. Stored in ZX order (Z increments first)[\[3\]](#3) {.nbt .byteArray}
        * **Entities**: List of CompoundTags, one for each entity in the chunk.[\[4\]](#4) {.nbt .list}
        * **TileEntities**: List of CompoundTags, one for each tile entity in the chunk. {.nbt .list}
            * A tile entity. {.nbt .compound}
                * **id**: The id of this tile entity. {.nbt .string}
                * **x**: The X position of this tile entity. {.nbt .int}
                * **y**: The Y position of this tile entity. {.nbt .int}
                * **z**: The Z position of this tile entity. {.nbt .int}
                * **Items**: List of CompoundTags, one for each item stack in the container. {.nbt .list}
                    * A item stack. {.nbt .compound}
                        * **Slot**: The slot the item is in. {.nbt .byte}
                        * **id**: The item ID. {.nbt .short}
                        * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
                        * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}
                * ***Additional Tags***: See [below](#additional-tile-entity-tags) for additional tags. {.nbt .blank}

</div>

## Additional Tile Entity Tags

### Furnace

* A tile entity. {.nbt .compound}
    * **BurnTime**: Number of ticks left before the current fuel run out. {.nbt .short}
    * **CookTime**: Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). It is reset to 0 if *BurnTime* reaches 0. {.nbt .short}

## Notes

1. <a id="1"></a> Index is calculated with `Y + (Z * ChunkHeight(128) + (X * ChunkHeight(128) * ChunkSize(16) ) )`
2. <a id="2"></a> Index is calculated with `(X << 11) | (Z << 7) | Y`
3. <a id="3"></a> Index is calculated with `(Z << 4 | X) & 255`
4. <a id="4"></a> Entities in this version don't spawn due to a bug so the list is always empty.
