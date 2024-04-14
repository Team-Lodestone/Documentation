# Minecraft Legacy Save File
## Base Information

The following Table gives you Important information the structure of a Save file:
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Offset(Int) | 0x04 | offset of File information
| NumberOfFiles(Int) | 0x04 | Number of Files in list of File Info
| Filedata | variable | bytes of each file contained inside the save
| [FileInfo](./Documentation.md#File-Information) | variable | Filenames, offsets within save, and size in bytes of files.


### File Information
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Filename | 0x80 | Endian reverse Unicode string to dictate the path of the file
| Filesize(Int) | 0x04 | Size of file in bytes
| Offset(Int) | 0x04 | offset of file


### MCR Structure
The following Table gives you Important information the structure of a legacy edition mcr file:
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| locations | 0x1000 | offsets of the chunks within the region file, as well as X,Y positioning
| timestamps |  0x1000 | timestamps for the chunks found within the previous sector
| chunks and unused space | variable | chunks themselves, compressed with a different format per-console.

### LCE buffers
| Platform | SAVEGAME | REGION | CHUNK/GRF |
| :-:|:-:|:-:|:-:|
| Xbox360 | XMemcompress | None | XMemcompress (+ RLE)
| PS3 | [Deflate(Algorithm)](https://en.wikipedia.org/wiki/Deflate) or None | None | Deflate(Algorithm) (+ RLE)
| WiiU | Zlib | None | Zlib (+ RLE)
| PSVita | Vita RLE | None | Zlib (+ RLE)
| Switch | Zlib | Switch RLE | Zlib (+ RLE)

### Chunk Structure
The chunks on LCE utilize a different format to Java's MCR Chunks, this is the header information:
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| [FlagAndBuffer](./Documentation.md#Chunk-header-flag) | 0x04 | Bit flag for RLE and an unknown value, plus 30 bits to specify the compressed buffer size
| RLEUncompressedBuffer(Int) | 0x04 | Size of the buffer after RLE is performed
| UncompressedBuffer(Int) | 0x04 | Size of the buffer before RLE is performed(only occurs on PS3)
| Format | 0x02 | chunk format version (0xC is aquatic)
| X(Int) | 0x04 | chunk X coordinate
| Y(Int) | 0x04 | chunk Y coordinate
| LastUpdate | 0x08 | chunk Last-Updated Time
| Inhabited  | 0x08 | chunk Inhabited Time(Only on chunk version 8 and higher)


### Chunk header flag
Within the chunk header lies a 4-byte portion of data that dictates 2 flags and the compressed chunk size.
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| RLE Flag | 1 | Flag for if to use RLE
| Unknown Flag | 1 | It is unknown what this flag is
| CompressedSize | 30 | compressed chunk size

