# Level Format

## Byte Order

level.dat is stored in **Little Endian** byte order.

## Parsing level.dat

### Part 1 (Getting the level NBT data)

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 4 | The version used to save the file. Always 3. |
| Size | 4 | The size of the file subtracting the header. |
| NBT Compound | Variable | The NBT data of the level. |

### Part 2 (Reading the NBT data)

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| GameType | IntTag | Whether in survival (0) or in creative (1) mode. |
| LastPlayed | LongTag | Stores the Unix time stamp (in seconds) when the player saved the game. |
| LevelName | StringTag | Specifies the name of the level. |
| Platform | IntTag | Seems to store the platform that the level is created on. Currently observed value is 2. |
| [Player](#player-data) | CompoundTag | Player entity information. |
| RandomSeed | LongTag | Random number providing the Random Seed for the terrain. |
| SizeOnDisk | LongTag | Estimated size of the entire world in bytes. |
| SpawnX | IntTag | X coordinate of the world's spawn position. Default is 0. |
| SpawnY | IntTag | Y coordinate of the world's spawn position. Default is 64. |
| SpawnZ | IntTag | Z coordinate of the world's spawn position. Default is 0. |
| StorageVersion | IntTag | Version of Bedrock Edition NBT, is 3. |
| Time | LongTag | Stores the current "time of day" in ticks. There are 20 ticks per real-life second, and 19200 ticks per Minecraft daylight cycle, making the full cycle length 16 minutes—4 minutes shorter than the standard 20 minute daylight cycle. |

### Player Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Air | ShortTag | The number of ticks before the player starts to drown. Defaults to 300 and decresses when underwater. |
| Armor | ListTag of CompoundTags | Each CompoundTag in this list defines a piece of armor that the player is wearing. This is a list with length 4 - for helmet, chestplate, leggings, and boots. |
| AttackTime | ShortTag | Number of ticks the player is immune to attacks for. |
| BedPositionX | IntTag | The X position of the bed the player last slept in. |
| BedPositionY | IntTag | The Y position of the bed the player last slept in. |
| BedPositionZ | IntTag | The Z position of the bed the player last slept in. |
| DeathTime | ShortTag | Number of ticks the player has been dead for. (used for death animation) |
| Dimension | IntTag | The dimension the player is in. 0 is the Overworld. |
| Fire | ShortTag | The number of ticks until the fire is put out. Negative values reflect how long the player can stand in fire before burning. Default -20. |
| Health | ShortTag | The number of hit points the player has. 20 is 10 hearts. |
| HurtTime | ShortTag | Number of ticks the player is red from being attacked. |
| Inventory | ListTag of CompoundTags | Each TAG_Compound in this list defines an item the player is carrying or holding. |
| Motion | ListTag of FloatTags | The players motion in the X,Y, and Z directions. This list has a length of 3. |
| OnGround | ByteTag | 1 or 0 (true/false) - true if the player is on the ground. |
| Pos | ListTag of FloatTags | The X,Y, and Z coordinates of the players position. This list has a length of 3. |
| Rotation | ListTag of FloatTags | The players looking pitch and yaw. This list has a length of 2. |
| Score | IntTag | The score of the player. |
| SleepTimer | ShortTag | The number of ticks the player had been in bed when this tag was saved. No effect. |
| Sleeping | ByteTag | 1 or 0 (true/false) - true if the player was in a bed when this tag was saved; has no effect on whether the player is in a bed when they log in. |
| SpawnX | IntTag | X coordinate of the player's spawn position. Default is 0. |
| SpawnY | IntTag | Y coordinate of the player's spawn position. Default is 64. |
| SpawnZ | IntTag | Z coordinate of the player's spawn position. Default is 0. |

***Armor Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| id | ShortTag | Item or Block ID. |
| Damage | ShortTag | For armor, the amount of wear they have suffered. The maximum durability of the armor means undamaged. When the Damage reaches 0, it breaks and disappears. |
| Count | ByteTag | Number of items stacked in this inventory slot. Any item can be stacked, including tools. Range is 1-255. Values above 255 are not displayed in-game. |

***Inventory Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| id | ShortTag | Item or Block ID. |
| Damage | ShortTag | For armor, the amount of wear they have suffered. The maximum durability of the armor means undamaged. When the Damage reaches 0, it breaks and disappears. |
| Count | ByteTag | Number of items stacked in this inventory slot. Any item can be stacked, including tools. Range is 1-255. Values above 255 are not displayed in-game. |
| Slot | ByteTag | Indicates which inventory slot this item is in. |

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/History#NBT_structure) with some wording tweaked and/or simplify
