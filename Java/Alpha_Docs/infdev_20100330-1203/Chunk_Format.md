# Chunk Format

## Byte Order

The chunk format is stored in **Big Endian** byte order.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **Level**: The level data in this chunk. {.nbt .compound}
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
            * An entity. See [Entity Format](../Entity_Format.md) for details. {.nbt .compound}
        * **TileEntities**: List of CompoundTags, one for each tile entity in the chunk. {.nbt .list}
            * A tile entity. See [Tile Entity Format](../Tile_Entity_Format.md) for details. {.nbt .compound}

</div>

## Notes

1. <a id="1"></a> Index is calculated with `Y + (Z * ChunkHeight(128) + (X * ChunkHeight(128) * ChunkSize(16) ) )`
2. <a id="2"></a> Index is calculated with `(X << 11) | (Z << 7) | Y`
3. <a id="3"></a> Index is calculated with `(Z << 4 | X) & 255`
4. <a id="4"></a> Entities in versions between `Infdev 20100327` and `Infdev 20100414` don't spawn due to a bug, which causes the list to always be empty, without the use of external editors to hack in entities.
