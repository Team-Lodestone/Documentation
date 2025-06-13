# Level Format

## Byte Order

The level format is stored in **Big Endian** byte order.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **Data**: Global level data {.nbt .compound}
        * **LastPlayed**: Stores the Unix time stamp (in milliseconds) when the player saved the game. {.nbt .long}
        * **SizeOnDisk**: Estimated size of the entire world in bytes. {.nbt .long}
        * **RandomSeed**: Random number providing the random seed for the terrain. {.nbt .long}
        * **SpawnX**: X coordinate of the level's spawn position. {.nbt .int}
        * **SpawnY**: Y coordinate of the level's spawn position. {.nbt .int}
        * **SpawnZ**: Z coordinate of the level's spawn position. {.nbt .int}
        * **Time**: Stores the current "time of day" in ticks. There are 20 ticks per real-life second, and 24000 ticks per Minecraft day/night cycle, making the full cycle length 20 minutes. 0 is the start of daytime, 12000 is the start of sunset, 13800 is the start of nighttime, 22200 is the start of sunrise, and 24000 is daytime again. The value stored in level.dat is always increasing and can be larger than 24000, but the "time of day" is always modulo 24000 of the "Time" field value. {.nbt .long}
        * **Player**: The singleplayer player for the level. {.nbt .compound}
            * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of the player. {.nbt .list}
            * **Rotation**: List of 2 FloatTags for the yaw and pitch of the player's view. {.nbt .list}
            * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
            * **OnGround**: 1 or 0 (true/false) - true if the player is on the ground. {.nbt .byte}
            * **FallDistance**: How far the player has fallen. {.nbt .float}
            * **Health**: The number of hit points the player has. 20 is 10 hearts. {.nbt .short}
            * **AttackTime**: Number of ticks the player is immune to attacks. {.nbt .short}
            * **HurtTime**: Number of ticks the player is red from being attacked. {.nbt .short}
            * **DeathTime**: Number of ticks the player has been dead for - used for controlling the death animation. {.nbt .short}
            * **Air**: The number of ticks before the player starts to drown. Starts at 300. {.nbt .short}
            * **Fire**: When negative, the number of ticks before the player can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
            * **Score**: The player's score. The score was never utilized in Alpha or even beta, so this value is irrelevant. {.nbt .int}
            * **Inventory**: List of CompoundTags representing the items in the player's inventory. {.nbt .list}
                * An inventory item. {.nbt .compound}
                    * **Slot**: The slot the item is in. {.nbt .byte}
                    * **id**: The item ID. {.nbt .short}
                    * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
                    * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>
