### note: in the process of being moved to files.

### MCR Structure
The following Table gives you Important information the structure of a legacy edition mcr file:
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| locations | 0x1000 | offsets of the chunks within the region file, as well as X,Y positioning
| timestamps |  0x1000 | timestamps for the chunks found within the previous sector
| chunks and unused space | variable | chunks themselves, compressed with a different format per-console.

### Chunk Structure
The chunks on LCE utilize a different format to Java's MCR Chunks, this is the header information:
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| [FlagAndBuffer](./Documentation.md#Chunk-header-flag) | 0x04 (u?int) | Bit flag for RLE and an unknown value, plus 30 bits to specify the compressed buffer size
| RLEUncompressedBuffer | 0x04 (u?int) | Size of the buffer after RLE is performed
| UncompressedBuffer | 0x04 (u?int) | Size of the buffer before RLE is performed(only occurs on PS3)
| Format | 0x02 (u?short) | chunk format version (0xC is aquatic)
| X | 0x04 (u?int) | chunk X coordinate
| Y | 0x04 (u?int) | chunk Y coordinate
| LastUpdate | 0x08 (u?long) | chunk Last-Updated Time
| Inhabited  | 0x08 (u?long) | chunk Inhabited Time(Only on chunk version 8 and higher)


### Chunk header flag
Within the chunk header lies a 4-byte portion of data that dictates 2 flags and the compressed chunk size.
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| RLE Flag | 1 | Flag for if to use RLE
| Unknown Flag | 1 | It is unknown what this flag is
| CompressedSize | 30 | compressed chunk size


### Newer-gen consoles (PS4, Xbox One, Switch)
It seems these consoles use a different format, which stores the regions in different files as opposed to just storing inside the savegame.

