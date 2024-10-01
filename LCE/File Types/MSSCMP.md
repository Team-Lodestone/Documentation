# MSSCMP

> [!NOTE]
> It seems this documentation only applies to Little Endian files.   
> Additionally, I use the name Index a lot in this... there's probably a better name for some of them.   

> [!TIP]
> I believe you can add 4 bytes to make BE files match up with the LE counterparts (specifically at the 2 areas where BE is missing bytes)

### MSSCMP file structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic | 0x04 | "BANK" if big endian, "KNAB" if little. |
| Unknown | 0x04 (uint) | Could be a file version? |
| File Data Offset | 0x04 (uint) | The offset at which all the file data starts, there are no indexes after this point. |
| Unknown | 0x0C (0x08 on BE) | Seems to just be null bytes. |
| [Index 1](#index-1) Offset | 0x04 (uint) | Where the first index starts. | 
| Unknown | 0x04 (Only on LE) | Seems to just be null bytes. |
| Offset of the last entry in [Index 1](#index-1) | 0x04 | This is where the last entry of the first index is, to get to the [second index](#index-2), add 4 to that value. |
| [Index 2](#index-2) | variable | Filenames, offsets within save, and size in bytes of files. |

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