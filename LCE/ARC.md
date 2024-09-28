# ARC File
> [!NOTE]
> "Variable" means the size is determined by other values, e.g., the Filename having a preceding short that determines the length of the string.

### ARC File structure
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| File Count | 0x04 (uint) | Number of files in the table, when reading the table you must read it `File Count` amount of times.
| [File Table](./ARC.md#ARC-Index) | Variable * File Count | File names, offsets, and size.

### ARC Index
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Filename Size | 0x02 (ushort) | Length of Filename in bytes
| Filename | Variable | UTF8 string, size is determined by a prefixed short.
| Offset | 0x04 (uint) | Offset of file in bytes
| Size | 0x04 (uint) | Size of file in bytes