# Minecraft LCE Save Format

> [!NOTE]
> Data in this format is endian-dependant and also commonly has compression applied to it.   
> Check out [Basic Info.md](../Basic%20Info.md) for more info.

For the pre-release (Xbox 360 Edition versions 0033 and 0035) save file, check out [Pre-Release Save Format.md](./Pre-Release%20Save%20Format.md).

### Save file structure
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Offset | 0x04 (uint) | Offset of [File information](#File-Information)
| File count | 0x04 (uint) | Number of Files in list of File Info
| Minimum version | 0x02 (ushort) | Minimum file version (assumed)
| File version | 0x02 (ushort) | Version of the save file
| File data | Variable | bytes of each file contained inside the save
| [File info](#File-Information) | Variable (144 * File count) | File names, file offsets, file sizes, and modified timestamps.


### File Information
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Filename | 0x80 | UTF16 UNIX-style path string to dictate the path of the file
| Filesize | 0x04 (uint) | Size of the file in bytes
| Offset | 0x04 (uint) | Offset of the file in bytes
| Timestamp | 0x08 (ulong) | Last modified timestamp of file, although unusable due to arbitrary values being used for the generation of the timestamp.


## Split Save Format
Not much seems to be known about split saves, so some info may be inaccurate.

| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Decompressed Size | 0x04 (uint) | |
| Compressed Region | Variable | |
