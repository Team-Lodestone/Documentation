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
        * **Entities**: List of CompoundTags, one for each entity in the chunk. {.nbt .list}
            * An entity. {.nbt .compound}
                * **id**: The id of this entity. {.nbt .string}
                * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
                * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
                * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
                * **FallDistance**: How far this entity has fallen. {.nbt .float}
                * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
                * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
                * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
                * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
                * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
                * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
                * ***Additional Tags***: See [below](#additional-entity-tags) for additional tags. {.nbt .blank}
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

## Additional Entity Tags

### Arrow

> [!NOTE]
> Arrows don't have the `AttackTime`, `HurtTime`, `Health`, and `DeathTime` tags.

* An entity. {.nbt .compound}
    * **inGround**: {.nbt .byte}
    * **inTile**: {.nbt .byte}
    * **shake**: {.nbt .byte}
    * **xTile**: {.nbt .short}
    * **yTile**: {.nbt .short}
    * **zTile**: {.nbt .short}

### Item

> [!NOTE]
> Items don't have the `AttackTime`, `HurtTime`, and `DeathTime` tags.

* An entity. {.nbt .compound}
    * **Age**: {.nbt .short}
    * **Item**: {.nbt .compound}
        * **id**: {.nbt .short}
        * **Damage**: {.nbt .short}
        * **Count**: {.nbt .byte}

### Sheep

* An entity. {.nbt .compound}
    * **Sheared**: {.nbt .byte}

## Additional Tile Entity Tags

### Furnace

* A tile entity. {.nbt .compound}
    * **BurnTime**: Number of ticks left before the current fuel run out. {.nbt .short}
    * **CookTime**: Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). It is reset to 0 if *BurnTime* reaches 0. {.nbt .short}

## Notes

1. <a id="1"></a> Index is calculated with `Y + (Z * ChunkHeight(128) + (X * ChunkHeight(128) * ChunkSize(16) ) )`
2. <a id="2"></a> Index is calculated with `(X << 11) | (Z << 7) | Y`
3. <a id="3"></a> Index is calculated with `(Z << 4 | X) & 255`
