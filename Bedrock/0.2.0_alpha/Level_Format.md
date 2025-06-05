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

<div id="treeview">

* World data {.nbt .compound}
    * **GameType**: Whether in survival (0) or in creative (1) mode. {.nbt .int}
    * **LastPlayed**: Stores the Unix time stamp (in seconds) when the player saved the game. {.nbt .long}
    * **LevelName**: Specifies the name of the level. {.nbt .string}
    * **Platform**: Seems to store the platform that the level is created on. Currently observed value is 2. {.nbt .int}
    * **Player**: Player entity information. {.nbt .compound}
        * **Air**: The number of ticks before the player starts to drown. Defaults to 300 and decresses when underwater. {.nbt .short}
        * **Armor**: Each CompoundTag in this list defines a piece of armor that the player is wearing. This is a list with length 4 - for helmet, chestplate, leggings, and boots. {.nbt .list}
            * **id**: Item or Block ID. {.nbt .short}
            * **Damage**: For armor, the amount of wear they have suffered. The maximum durability of the armor means undamaged. When the Damage reaches 0, it breaks and disappears. {.nbt .short}
            * **Count**: Number of items stacked in this inventory slot. Any item can be stacked, including tools. Range is 1-255. Values above 255 are not displayed in-game. {.nbt .byte}
        * **AttackTime**: Number of ticks the player is immune to attacks for. {.nbt .short}
        * **BedPositionX**: The X position of the bed the player last slept in. {.nbt .int}
        * **BedPositionY**: The Y position of the bed the player last slept in. {.nbt .int}
        * **BedPositionZ**: The Z position of the bed the player last slept in. {.nbt .int}
        * **DeathTime**: Number of ticks the player has been dead for. (used for death animation) {.nbt .short}
        * **Dimension**: The dimension the player is in. 0 is the Overworld. {.nbt .int}
        * **Fire**: The number of ticks until the fire is put out. Negative values reflect how long the player can stand in fire before burning. Default -20. {.nbt .short}
        * **Health**: The number of hit points the player has. 20 is 10 hearts. {.nbt .short}
        * **HurtTime**: Number of ticks the player is red from being attacked. {.nbt .short}
        * **Inventory**: Each CompoundTag in this list defines an item the player is carrying or holding. {.nbt .list}
            * **id**: Item or Block ID. {.nbt .short}
            * **Damage**: For armor, the amount of wear they have suffered. The maximum durability of the armor means undamaged. When the Damage reaches 0, it breaks and disappears. {.nbt .short}
            * **Count**: Number of items stacked in this inventory slot. Any item can be stacked, including tools. Range is 1-255. Values above 255 are not displayed in-game. {.nbt .byte}
            * **Slot**: Indicates which inventory slot this item is in. {.nbt .byte}
        * **Motion**: The players motion in the X,Y, and Z directions. This list has a length of 3. {.nbt .list}
        * **OnGround**: 1 or 0 (true/false) - true if the player is on the ground. {.nbt .byte}
        * **Pos**: The X,Y, and Z coordinates of the players position. This list has a length of 3. {.nbt .list}
        * **Rotation**: The players looking pitch and yaw. This list has a length of 2. {.nbt .list}
        * **Score**: The score of the player. {.nbt .int}
        * **SleepTimer**: The number of ticks the player had been in bed when this tag was saved. No effect. {.nbt .short}
        * **Sleeping**: 1 or 0 (true/false) - true if the player was in a bed when this tag was saved; has no effect on whether the player is in a bed when they log in. {.nbt .byte}
        * **SpawnX**: X coordinate of the player's spawn position. Default is 0. {.nbt .int}
        * **SpawnY**: Y coordinate of the player's spawn position. Default is 64. {.nbt .int}
        * **SpawnZ**: Z coordinate of the player's spawn position. Default is 0. {.nbt .int}
    * **RandomSeed**: Random number providing the Random Seed for the terrain. {.nbt .long}
    * **SizeOnDisk**: Estimated size of the entire world in bytes. {.nbt .long}
    * **SpawnX**: X coordinate of the world's spawn position. Default is 0. {.nbt .int}
    * **SpawnY**: Y coordinate of the world's spawn position. Default is 64. {.nbt .int}
    * **SpawnZ**: Z coordinate of the world's spawn position. Default is 0. {.nbt .int}
    * **StorageVersion**: Version of Bedrock Edition NBT, is 3. {.nbt .int}
    * **Time**: Stores the current "time of day" in ticks. There are 20 ticks per real-life second, and 19200 ticks per Minecraft daylight cycle, making the full cycle length 16 minutes—4 minutes shorter than the standard 20 minute daylight cycle. {.nbt .long}

</div>

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/History#NBT_Structure) with some wording tweaked and/or simplify
