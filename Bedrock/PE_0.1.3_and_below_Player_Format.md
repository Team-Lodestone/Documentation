# Pocket Edition 0.1.3 and Below `player.dat` Format

## Byte Order

level.dat is stored in **Little Endian** byte order.

## Parsing level.dat

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 4 | The version used to save the file. Always 1. |
| Size | 4 | The size of the file subtracting the header(Version and Size). Always 80. |
| Pos X | 4 | The X coordinate of the players position. |
| Pos Y | 4 | The Y coordinate of the players position. |
| Pos Z | 4 | The Z coordinate of the players position. |
| Motion X | 4 | The players motion in the X direction. |
| Motion Y | 4 | The players motion in the Y direction. |
| Motion Z | 4 | The players motion in the Z direction. |
| Pitch | 4 | The players looking pitch. |
| Yaw | 4 | The players looking yaw. |
| Unknown | 4 | |
| Fire | 2 | The number of ticks until the fire is put out. Negative values reflect how long the player can stand in fire before burning. Default -20. |
| Air | 2 | How much air the player has, in ticks. Fills to a maximum of 300 in air. Decreases while underwater. |
| Unknown | 4 | |
| Hotbar | 36 | 9 slots that take up 4 bytes each, the first 2 bytes is the item ID, The next 2 bytes is the items data value. The last slot is always saved as `0xFF` for every byte. |
