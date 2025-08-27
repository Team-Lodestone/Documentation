# MCGalaxy .LVL save format

### LVL structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic | 0x02 | Must be `1874` in decimal. | 
| Width | 0x02 | Width of the level |
| Length | 0x02 | Length of the level |
| Height | 0x02 | Height of the level |
| SpawnX | 0x02 | X Coordinate of the spawn point |
| SpawnZ | 0x02 | Z Coordinate of the spawn point |
| SpawnY | 0x02 | Y Coordinate of the spawn point |
| SpawnYaw | 0x01 | Yaw rotation of the spawn point |
| SpawnPitch | 0x01 | Pitch rotation of the spawn point |
| Minimum access permission level | 0x01 | Minimum permission level required to visit the level, apparently ignored internally |
| Minimum build permission level | 0x01 | Minimum permission level required to build in the level, apparently ignored internally |
| Blocks | Variable (Width * Length * Height) | Block array in XZY format |

**NOT FINISHED**


