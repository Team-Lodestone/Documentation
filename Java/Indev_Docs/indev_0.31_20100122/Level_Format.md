# Level Format

## Byte Order

The level format is stored in **Big Endian** byte order.

## MinecraftLevel (Root) Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| [About](#about-data) | CompoundTag | Information about the level. |
| [Environment](#environment-data) | CompoundTag | Information about the environment, varies based on map settings. |
| [Map](#map-data) | CompoundTag | The map data. |
| [Entities](#entities-data) | ListTag | ListTag of CompoundTags holding all the entities in the level. |
| [TileEntities](#tileentities-data) | ListTag | ListTag of CompoundTags holding all the tile entities in the level. |

***About Data***<a id="about-data"></a>

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| CreatedOn | LongTag | The Unix timestamp of when the level was created. |
| Name | StringTag | The name of the level. Always `A Nice World`. |
| Author | StringTag | The name of the user who created the level. |

***Environment Data***<a id="environment-data"></a>

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| TimeOfDay | ShortTag | The time in ticks affecting the daylight cycle. Range: 0 - 24000. |
| SkyBrightness | ByteTag | The sky light level. Range: 0 - 15. |
| SkyColor | IntTag | The RGB color of the sky, 24 bits. Red is `SkyColor >> 16 & 255`, Green is `SkyColor >> 8 & 255`, and Blue is `SkyColor & 255`. |
| FogColor | IntTag | The RGB color of the sky, 24 bits. Red is `FogColor >> 16 & 255`, Green is `FogColor >> 8 & 255`, and Blue is `FogColor & 255`. |
| CloudColor | IntTag | The RGB color of the sky, 24 bits. Red is `CloudColor >> 16 & 255`, Green is `CloudColor >> 8 & 255`, and Blue is `CloudColor & 255`. |
| CloudHeight | ShortTag | The height of the clouds. |
| SurroundingGroundType | ByteTag | The block ID of the "surrounding ground". |
| SurroundingGroundHeight | ShortTag | The height of the "surrounding ground". |
| SurroundingWaterType | ByteTag | The block ID of the "surrounding water". |
| SurroundingWaterHeight | ShortTag | The height of the "surrounding water". |

***Map Data***<a id="map-data"></a>

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Width | ShortTag | The width of the level. (X direction) |
| Length | ShortTag | The length of the level. (Z direction) |
| Height | ShortTag | The height of the level. (Y direction) |
| Spawn | ListTag | ListTag of 3 ShortTags holding the X, Y, and Z spawn coordinates. |
| Blocks | ByteArrayTag | ***Width***×***Length***×***Height*** bytes of block IDs (8 bits). XZY order (X increments first)[\[1\]](#1) |
| Data | ByteArrayTag | ***Width***×***Length***×***Height*** bytes of block data (4 bits) and light data (next 4 bits). XZY order (X increments first) |

***Entities Data***<a id="entities-data"></a>

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| id | StringTag | The entity ID. |
| Pos | ListTag | ListTag of 3 FloatTags holding the X, Y, and Z position of the entity. |
| Rotation | ListTag | ListTag of 2 FloatTags holding the yaw and pitch of the entities view. |
| Motion | ListTag | ListTag of 3 FloatTags holding the X, Y, and Z motion of the entity in meters per tick. |
| FallDistance | FloatTag | How far the entity has fallen. |
| Health | ShortTag | The number of hit points the entity has. 20 is 10 hearts. |
| AttackTime | ShortTag | Number of ticks the entity is immune to attacks for. |
| HurtTime | ShortTag | Number of ticks the entity is red from being attacked. |
| DeathTime | ShortTag | Number of ticks the entity has been dead for. (used for death animation) |
| Air | ShortTag | The number of ticks before the entity starts to drown. It starts at 300. |
| Fire | ShortTag | When negative, the number of ticks before the entity can catch on fire. When positive, the number of ticks before the fire is extinguished. |
| *AdditionalEntityTags* | *TagType* | See [Additional Entity Tags](#additional-entity-tags) |

***TileEntities Data***<a id="tileentities-data"></a>

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| id | StringTag | The tile entity ID. |
| Pos | IntTag | Position of the tile entity[\[2\]](#2). |
| Items | ListTag | ListTag of CompoundTags holding the items in the container. |
| *AdditionalTileEntityTags* | *TagType* | See [Additional Tile Entity Tags](#additional-tile-entity-tags) |

***Items Data***
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Slot | ByteTag | The slot the item is in. |
| id | ShortTag | The item ID. |
| Damage | ShortTag | The item's data value, or damage value for tools. |
| Count | ByteTag | The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. |

### Additional Entity Tags

**Item (Entity)**

**NOTE:** Item entity doesn't have the AttackTime, HurtTime, and DeathTime tags.
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Age | ShortTag | The number of ticks the item has been "untouched". After 6000 ticks (5 minutes) the item is destroyed. |
| Item | CompoundTag | The inventory item, without the Slot tag. |

***Item Data***
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| id | ShortTag | The item ID. |
| Damage | ShortTag | The item's data value, or damage value for tools. |
| Count | ByteTag | The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. |

**LocalPlayer**
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Inventory | ListTag | ListTag of CompoundTags holding the items in the players inventory. |
| Score | IntTag | The player's score. |

***Inventory Data***
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Slot | ByteTag | The slot the item is in. |
| id | ShortTag | The item ID. |
| Damage | ShortTag | The item's data value, or damage value for tools. |
| Count | ByteTag | The number of this item in the stack. Range -128 to 127. Values less then 2 are not displayed in-game. |

**Sheep**
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Sheared | ByteTag | 1 or 0 (true/false) - true if the sheep has been shorn. |

### Additional Tile Entity Tags

**Furnace**
| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| BurnTime | ShortTag | Number of ticks left before the current fuel runs out. |
| CookTime | ShortTag | Number of ticks the item has been smelting for. The item finishes when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0. |

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
