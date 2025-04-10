# Player Format

## Byte Order

level.dat is stored in **Little Endian** byte order.

## Parsing level.dat

***Header***

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 4 | The version used to save the file. Always 1. |
| Size | 4 | The size of the file subtracting the header. Always 80. |

***Player Data***

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Pos X | 4 | The X coordinate of the players position. |
| Pos Y | 4 | The Y coordinate of the players position. |
| Pos Z | 4 | The Z coordinate of the players position. |
| Motion X | 4 | The players motion in the X direction. |
| Motion Y | 4 | The players motion in the Y direction. |
| Motion Z | 4 | The players motion in the Z direction. |
| Pitch | 4 | The players looking pitch. |
| Yaw | 4 | The players looking yaw. |
| Unknown | 4 | Maybe an unused Roll value[\[needs testing\]]() |
| Fire | 2 | The number of ticks until the fire is put out. Negative values reflect how long the player can stand in fire before burning. Default -20. |
| Air | 2 | How much air the player has, in ticks. Fills to a maximum of 300 in air. Decreases while underwater. |
| Unknown | 4 | |

***Hotbar***

Loop the next section `9` times until you have parsed all slots of the hotbar.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Item Id | 4 | The [ID](https://minecraft.wiki/w/Pocket_Edition_data_values_Pre-v0.2.0_alpha) of the item. |

The 9th slot is always `0xFFFFFFFF` representing the open inventory button with the 3 dots (`•••`).

Depending on the device some slots may not be shown in game but all 9 slots are still saved to the file. For example if in game only shows 3 item slots they will be stored as the first 3 items in the hotbar.

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/v0.1.0_alpha#player.dat) with some wording tweaked and/or simplify
