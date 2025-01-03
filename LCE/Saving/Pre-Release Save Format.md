# LCE Pre-Release Save File

> [!NOTE]
> Data in this format is endian-dependant and also commonly has compression applied to it.   
> Check out [Basic Info.md](../Basic%20Info.md) for more info.

### Upgrading
- These save files can be upgraded to the new format, working in atleast TU0, does not work in TU75.
- Upgrading a world in this format will usually leave a "players_" file. This also means you will lose your player data upon loading a save in a newer version.
- When upgraded, the timestamps of all the files are set to 0L.

### Save file structure
| Name                                                      | Size (in bytes) | Description                                                                                     |
|-----------------------------------------------------------|:---------------:|-------------------------------------------------------------------------------------------------|
| Offset                                                    |   0x04 (uint)   | Offset of [File Index](./Pre-Release%20Save%20Format.md#File-Index)                             |
| Index Size                                                |   0x04 (uint)   | Size of File Index in bytes                                                                     |
| Minimum Version                                           |  0x02 (ushort)  | Minimum file version the LCE client has to support to load the save (might not be used in-game) |
| Current Version                                           |  0x02 (ushort)  | Current version of the save file                                                                |
| File Data                                                 |    variable     | bytes of each file contained inside the save                                                    |
| [File Index](./Pre-Release%20Save%20Format.md#File-Index) |    variable     | Filenames, offsets within save, and size in bytes of files.                                     |

> [!TIP]
> You can get the file count by dividing the Index Size by 136 (e.g $`1360 / 136`$)   

<!-- I don't think the file name is actually endian reverse... -->
### File Index
| Name        | Size (in bytes) | Description                                                  |
|-------------|:---------------:|--------------------------------------------------------------|
| File Name   |      0x80       | UTF16 UNIX-style path string to dictate the path of the file |
| File Size   |   0x04 (uint)   | Size of file in bytes                                        |
| File Offset |   0x04 (uint)   | Offset of file in bytes                                      |

> [!WARNING]
> There may be index data [at the end of NBT file data](https://github.com/user-attachments/assets/e44eea94-41a9-42cf-8386-f84ac9565cff)  
> I assume that these versions might not remove index data from files as usually it'd not get read at all...

