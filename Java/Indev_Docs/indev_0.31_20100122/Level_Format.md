# Level Format

## Byte Order

The level format is stored in **Big Endian** byte order.

## MinecraftLevel (Root) Data

<div id="treeview">

* **MinecraftLevel**: The root tag. {.nbt .compound}
    * **About**: Information about the level. {.nbt .compound}
        * **CreatedOn**: The Unix time when the level was created. {.nbt .long}
        * **Name**: The name of the level, Always `A Nice World`. {.nbt .string}
        * **Author**: The name of the user who created the level. {.nbt .string}
    * **Environment**: Information about the environment, varies based on map settings. {.nbt .compound}
        * **TimeOfDay**: The time in ticks affecting the daylight cycle. Range: 0 - 24000. {.nbt .short}
        * **SkyBrightness**: The sky light level. Range: 0 - 15. {.nbt .byte}
        * **SkyColor**: The RGB color of the sky, 24 bits. Red is `SkyColor >> 16 & 255`, Green is `SkyColor >> 8 & 255`, and Blue is `SkyColor & 255`. {.nbt .int}
        * **FogColor**: The RGB color of the sky, 24 bits. Red is `FogColor >> 16 & 255`, Green is `FogColor >> 8 & 255`, and Blue is `FogColor & 255`. {.nbt .int}
        * **CloudColor**: The RGB color of the sky, 24 bits. Red is `CloudColor >> 16 & 255`, Green is `CloudColor >> 8 & 255`, and Blue is `CloudColor & 255`. {.nbt .int}
        * **CloudHeight**: The height of the clouds. {.nbt .short}
        * **SurroundingGroundType**: The block ID of the "surrounding ground". {.nbt .byte}
        * **SurroundingGroundHeight**: The height of the "surrounding ground". {.nbt .short}
        * **SurroundingWaterType**: The block ID of the "surrounding water". {.nbt .byte}
        * **SurroundingWaterHeight**: The height of the "surrounding water". {.nbt .short}
    * **Map**: The map data. {.nbt .compound}
        * **Width**: The width of the level. (X direction) {.nbt .short}
        * **Length**: The length of the level. (Z direction) {.nbt .short}
        * **Height**: The height of the level. (Y direction) {.nbt .short}
        * **Spawn**: ListTag of 3 ShortTags holding the X, Y, and Z spawn coordinates. {.nbt .list}
        * **Blocks**: ***Width***×***Length***×***Height*** bytes of block IDs (8 bits). XZY order (X increments first)[\[1\]](#1) {.nbt .byteArray}
        * **Data**: ***Width***×***Length***×***Height*** bytes of block data (4 bits) and light data (next 4 bits). XZY order (X increments first) {.nbt .byteArray}
    * **Entities**: ListTag of CompoundTags holding all the entities in the level. {.nbt .list}
        * An entity. {.nbt .compound}
            * **id**: The entity ID. {.nbt .string}
            * **Pos**: ListTag of 3 FloatTags holding the X, Y, and Z position of the entity. {.nbt .list}
            * **Rotation**: ListTag of 2 FloatTags holding the yaw and pitch of the entities view. {.nbt .list}
            * **Motion**: ListTag of 3 FloatTags holding the X, Y, and Z motion of the entity in meters per tick. {.nbt .list}
            * **FallDistance**: How far the entity has fallen. {.nbt .float}
            * **Health**: The number of hit points the entity has. 20 is 10 hearts. {.nbt .short}
            * **AttackTime**: Number of ticks the entity is immune to attacks for. {.nbt .short}
            * **HurtTime**: Number of ticks the entity is red from being attacked. {.nbt .short}
            * **DeathTime**: Number of ticks the entity has been dead for. (used for death animation) {.nbt .short}
            * **Air**: The number of ticks before the entity starts to drown. It starts at 300. {.nbt .short}
            * **Fire**: When negative, the number of ticks before the entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
            * *AdditionalEntityTags*: See [Additional Entity Tags](#additional-entity-tags) {.nbt .blank}
    * **TileEntities**: ListTag of CompoundTags holding all the tile entities in the level. {.nbt .list}
        * A tile entity. {.nbt .compound}
            * **id**: The tile entity ID. {.nbt .short}
            * **Pos**: Position of the tile entity[\[2\]](#2). {.nbt .int}
            * **Items**: ListTag of CompoundTags holding the items in the container. {.nbt .list}
                * An item stack. {.nbt .compound}
                    * **Slot**: The slot the item is in. {.nbt .byte}
                    * **id**: The item ID. {.nbt .short}
                    * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
                    * **Count**: The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. {.nbt .byte}
            * *AdditionalTileEntityTags*: See [Additional Tile Entity Tags](#additional-tile-entity-tags) {.nbt .blank}

</div>

### Additional Entity Tags

**Item (Entity)**

**NOTE:** Item entity doesn't have the AttackTime, HurtTime, and DeathTime tags.

<div id="treeview">

* {.nbt .compound}
    * **Age**: The number of ticks the item has been "untouched". After 6000 ticks (5 minutes) the item is destroyed. {.nbt .short}
    * **Item**: The inventory item, without the Slot tag. {.nbt .compound}
        * **id**: The item ID. {.nbt .short}
        * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
        * **Count**: The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

**LocalPlayer**

<div id="treeview">

* {.nbt .compound}
    * **Inventory**: ListTag of CompoundTags holding the items in the players inventory. {.nbt .list}
        * **Slot**: The slot the item is in. {.nbt .byte}
        * **id**: The item ID. {.nbt .short}
        * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
        * **Count**: The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. {.nbt .byte}
    * **Score**: The player's score. {.nbt .int}

</div>

**Sheep**

<div id="treeview">

* {.nbt .compound}
    * **Sheared**: 1 or 0 (true/false) - true if the sheep has been shorn. {.nbt .byte}

</div>

### Additional Tile Entity Tags

**Furnace**

<div id="treeview">

* {.nbt .compound}
    * **BurnTime**: Number of ticks left before the current fuel runs out. {.nbt .short}
    * **CookTime**: Number of ticks the item has been smelting for. The item finishes when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0. {.nbt .short}

</div>

## Notes
1. <a id="1"></a> The index can be calculated with `(y × length + z) × width + x`

2. <a id="2"></a> Calculate ***Pos*** tag from X, Y, and Z:<br>
`Pos = x + (y << 10) + (z << 20)`<br><br>
Calculate X, Y, Z from ***Pos*** tag:<br>
`x = Pos % 1024`<br>
`y = (Pos >> 10) % 1024`<br>
`z = (Pos >> 20) % 1024`

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Java_Edition_Indev_level_format) with some wording tweaked and/or simplify
