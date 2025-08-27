# Thumbnail format

> [!NOTE]
> Some data in this format is endian-dependant.   
> Check out [Basic Info.md](../Basic%20Info.md/#Endianness) for more info.

### World Info structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| [Header](#header) | Variable/None | Doesn't always exist, size and availability depends on console. | 
| [Thumbnail](#world-thumbnail) | Variable (Rest of file) | PNG thumbnail of what the player was seeing on logout

### Header
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| World Name | Variable | UTF16 null terminated string
| Memory | Variable (Rest of data after World Name) | Random data that got written into the file buffer, this data is useless. example image: ![Dexrn_imhex-gui_a8ZYtlf2uY_10-07-2024_10_28_02_498_PM](https://github.com/user-attachments/assets/f1f3e55c-c678-4589-9ef6-5344ef286c0c)

### World Thumbnail
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Image data | Variable | Thumbnail of the image |
| [World metadata](#world-metadata) | Variable (in PNG) | Contains world metadata, in a tEXt chunk. |

### World Metadata
> [!NOTE]
> The way tEXt chunks work seems to be key value, the way 4J does it is really weird, where they use the key and value as one string of key value pairs.

| Key | Description                                                        |
|-----|--------------------------------------------------------------------|
| 4J_SEED           | World seed                                           | 
| 4J_HOSTOPTIONS    | Host options, format is unknown                      |
| 4J_TEXTUREPACK    | Seems to be the previously chosen texture pack       |
| 4J_EXTRADATA      | Unknown                                              |
| 4J_BASESAVENAME   | Seems to only be used on MCS files                   |
| 4J_#LOADS         | Unknown                                              |
| 4J_EXPLOREDCHUNKS | Seems to only exist on versions that use split saves |


