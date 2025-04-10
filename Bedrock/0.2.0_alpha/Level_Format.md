# Level Format

## Byte Order

level.dat is stored in **Little Endian** byte order.

## Parsing level.dat

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| GameType | IntTag | Whether in survival (0) or in creative (1) mode. |
| LastPlayed | LongTag | Stores the Unix time stamp (in seconds) when the player saved the game. |
| LevelName | StringTag | Specifies the name of the level. |
| Platform | IntTag | Seems to store the platform that the level is created on. Currently observed value is 2. |
| [Player](#player-data) | CompoundTag | Player entity information. See [Entity Format](./Entities_Format.md) for details. It is missing the id tag and has additional elements. |
| RandomSeed | LongTag | Random number providing the Random Seed for the terrain. |
| SizeOnDisk | LongTag | Estimated size of the entire world in bytes. |
| SpawnX | IntTag | X coordinate of the world's spawn position. Default is 0. |
| SpawnY | IntTag | Y coordinate of the world's spawn position. Default is 64. |
| SpawnZ | IntTag | Z coordinate of the world's spawn position. Default is 0. |
| StorageVersion | IntTag | Version of Bedrock Edition NBT, is 3. |
| Time | LongTag | Stores the current "time of day" in ticks. There are 20 ticks per real-life second, and 19200 ticks per Minecraft daylight cycle, making the full cycle length 16 minutes—4 minutes shorter than the standard 20 minute daylight cycle. |
| dayCycleStopTime | LongTag | Determines the tick the daylight cycle is paused at. Values at or above 2,147,483,648 (231) result in the daylight cycle not being paused. Default value is 5,000 in creative mode, and 18,446,744,073,709,551,615 (264-1) in survival mode. |
| spawnMobs | IntTag | Disable (0) or enable (1) mob spawning. |

### Player Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| Armor | ListTag of CompoundTags | Each CompoundTag in this list defines a piece of armor that the player is wearing. This is a list with length 4 - for helmet, chestplate, leggings, and boots. |
| Dimension | IntTag | The dimension the player is in. 0 is the Overworld. |
| Inventory | ListTag of CompoundTags | Each TAG_Compound in this list defines an item the player is carrying or holding. |
| Score | IntTag | The score of the player. |
| Sleeping | ByteTag | 1 or 0 (true/false) - true if the player was in a bed when this tag was saved; has no effect on whether the player is in a bed when they log in. |
| SleepTimer | ShortTag | The number of ticks the player had been in bed when this tag was saved. No effect. |
| SpawnX | IntTag | X coordinate of the player's spawn position. Default is 0. |
| SpawnY | IntTag | Y coordinate of the player's spawn position. Default is 64. |
| SpawnZ | IntTag | Z coordinate of the player's spawn position. Default is 0. |
| abilities | CompoundTag | The abilities this player has. |

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

***Abilities Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| mayfly | ByteTag | 1 or 0 (true/false) - true if the player can fly. |
| flying | ByteTag | 1 or 0 (true/false) - true if the player is currently flying. |
| invulnerable | ByteTag | 1 or 0 (true/false) - true if the player is immune to all damage and harmful effects except for void damage. |
| mayBuild | ByteTag | 1 or 0 (true/false) - true if the player can place and destroy blocks. |
| instabuild | ByteTag | 1 or 0 (true/false) - true if the player can instantly destroy blocks. |

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/History#NBT_structure) with some wording tweaked and/or simplify
