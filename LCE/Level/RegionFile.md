# MCR Structure
The following Table gives you Important information the structure of a legacy edition mcr file:

| Name                     |  Size (in bytes)   | Description                                                               |
|--------------------------|:------------------:|---------------------------------------------------------------------------|
| [Locations](#locations)  | 0x1000 (1024 ints) | Offsets of the chunks within the region file, as well as X,Y positioning  |
| Timestamps               | 0x1000 (1024 ints) | Timestamps for the chunks found within the previous sector                |
| Chunks                   |      variable      | Chunks themselves, compressed with a different format per-console.        |

## Locations
The locations in LCE seem to use a different format per endianness...

#### Big Endian
Equivalent to JE Regions

| Name   | Size (in bytes) | Description                                                               |
|--------|:---------------:|---------------------------------------------------------------------------|
| Offset |  0x03 (int24)   | Offset of the chunk, to get the true offset you need to multiply by 4096. |
| Size   |   0x01 (byte)   | Size of the chunk in 4096-byte sectors                                    |

#### Little Endian

| Name   | Size (in bytes) | Description                                                               |
|--------|:---------------:|---------------------------------------------------------------------------|
| Size   |   0x01 (byte)   | Size of the chunk in 4096-byte sectors                                    |
| Offset |  0x03 (int24)   | Offset of the chunk, to get the true offset you need to multiply by 4096. |

## Compressed Chunk
Chunks in LCE are double compressed, usually with the console's compression format + chunk specific RLE.

| Name              |       Size (in bits)       | Description                                                                    |
|-------------------|:--------------------------:|--------------------------------------------------------------------------------|
| RLE Flag          |             1              | Flag for if to use RLE                                                         |
| Unknown Flag      |             1              | It is unknown what this flag is                                                |
| Compressed Size   |             30             | Compressed chunk size, to get the actual size, you must AND it by `0x3FFFFFFF` |
| Decompressed Size |          32 (u32)          | Decompressed chunk size                                                        |
| Compressed chunk  | Variable (Compressed Size) | The rest of the chunk                                                          |
