# MSSCMP

> [!NOTE]
> Some data in this format is endian-dependant.   
> Check out [Basic Info.md](../Basic%20Info.md/#Endianness) for more info.

> [!NOTE]
> New gen consoles seem to use Long (0x08) instead of Int (0x04) for *some* of the header values.   
> "0xXX/0xYY" means 0xXX on new gen, 0xYY on older gen. (e.g 0x08/0x04 means 0x08 on new gen, 0x04 on old gen.)   
> Additionally, I use the name Index a lot in this... there's probably a better name for some of them.   

### MSSCMP file structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic | 0x04 | "BANK" if big endian, "KNAB" if little. |
| Unknown | 0x04 (uint) | Could be a file version? |
| File Data Offset | 0x08/0x04 (uint/ulong) | The offset at which all the file data starts, there are no indexes after this point. |
| Unknown | 0x08 | Seems to just be null bytes. |
| [Index 1](#index-1) offset | 0x08/0x04 (uint/ulong) | Where the first index starts. |
| [Index 1](#index-1) Last entry offset | 0x08/0x04 (uint/ulong) | Offset of the last entry in the first index. | 
| Unknown | 0x10/0x08 | Seems to just be the last entry offset repeated twice. |
| Unknown offset | 0x08/0x04 | Seems to lead to an area right before where the file paths start. |
| [Index 1](#index-1) Entry count | 0x08/0x04 | How many entries are in [Index 1](#index-1) |
| Unknown | 0x04/0x08 | Seems to just be null bytes. |
| [Index 2](#index-2) Entry count | 0x04 | How many entries are in [Index 2](#index-2) |

> [!TIP]
> To get the offset of [Index 2](#index-2), grab the Index 1 last entry offset, and add 4.

### Index 1
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Folder offset | 0x04 (uint) | Offset of the name in the folder index |
| Another folder offset? | 0x04 (uint) | Seems to be another folder index, this time with weird text as the seperator. Additionally, the first offset seems to lead to "9;4;" as the folder name. |

### Index 2
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Offset of file in the [File Info Index](#file-info-index) | 0x04 (uint) | Offset of the file in the file info index |
| Offset of file in the [File Path Index](#file-path-index) | 0x04 (uint) | Contains the full name of the file. |

### File Info Index
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Unknown | 0x04 (uint) | |
| File data offset | 0x04 (uint) | Offset to the actual file data |
| Unknown | 0x08 | |
| Sample rate | 0x04 (uint) | Sample rate of the binka file |
| File size | 0x04 (uint) | Size of the file |

### File Path Index
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| File name + path | Variable (Null terminated string) | Uses the same naming scheme as Java does with it's resource packs |
| Binka name | Variable (Null terminated string) | "\*{size}\*{offset}.binka" in text form. |
| Nka | Usually 0x03 (Null terminated string) | Appears to be the word Binka cut off, it just says "nka" and I don't think it's ever read. |

I found this out all by myself because I got bored and wanted to make docs on it lol -Dexrn
