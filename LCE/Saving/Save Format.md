# Minecraft LCE Save File

### Save file structure
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Offset | 0x04 (uint) | Offset of [File information](#File-Information)
| File count | 0x04 (uint) | Number of Files in list of File Info
| Minimum version | 0x02 (ushort) | Minimum file version the LCE client has to support to load the save
| Current version | 0x02 (ushort) | Current version of the save file
| File data | Variable | bytes of each file contained inside the save
| [File info](#File-Information) | Variable (144 * File count) | File names, file offsets, file sizes, and modified timestamps.


### File Information
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Filename | 0x80 | UTF16 UNIX-style path string to dictate the path of the file
| Filesize | 0x04 (uint) | Size of the file in bytes
| Offset | 0x04 (uint) | Offset of the file in bytes
| Timestamp | 0x08 (ulong) | Last modified timestamp of file, although unusable due to arbitrary values being used for the generation of the timestamp.
