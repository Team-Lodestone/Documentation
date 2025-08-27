### Endianness
| Console                                              | Endian |
|:-----------------------------------------------------|:------:|
| Xbox 360, PS3, Wii U                                 |  Big   |
| Xbox One, PS Vita, Switch, PS4, 3DS, Windows, "NONE" | Little |

### LCE compression
| Platform | SAVEGAME                                                            | REGION                | CHUNK/GRF                                          |
|----------|---------------------------------------------------------------------|-----------------------|----------------------------------------------------|
| Switch   | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE)                                       |
| PS4      | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE?) <!-- rle unconfirmed but likely. --> |
| Xbox One | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE?) <!-- rle unconfirmed but likely. --> |
| Xbox 360 | XMemcompress/LZX                                                    | None                  | XMemcompress/LZX (+ RLE)                           |
| PS3      | [Deflate(Algorithm)](https://en.wikipedia.org/wiki/Deflate) or None | None                  | Deflate(Algorithm) (+ RLE)                         |
| Wii U    | Zlib                                                                | None                  | Zlib (+ RLE)                                       |
| PS Vita  | Vita RLE                                                            | None                  | Zlib (+ RLE)                                       |
| 3DS      | Zlib                                                                | None                  | Zlib (no RLE)                                      |
| Windows  | Unknown                                                             | Unknown               | Unknown                                            |

> [!NOTE]
> Xbox One may be inaccurate. - DexrnZacAttack   
> 3DS is not LCE so documentation will be off for it. - Cracko298

### ESavePlatform
Enum type (assumed by the name starting with E) that exists in Wii U Edition, which seems to hold all the platforms that LCE was compiled for.   
Various checks for a value inside this enum tells us a few things, namely support for certain features. (such as Split Saves)   

It seems these values got inlined by the compiler, so the enum has to be reconstructed manually.

| Assumed Name     | Value      | As String | 
|------------------|------------|-----------|
| Xbox 360         | 0x58333630 | X360      |
| Xbox One         | 0x5842315f | XB1_      |
| PlayStation 3    | 0x5053335f | PS3_      |
| PlayStation 4    | 0x5053345f | PS4_      |
| PlayStation Vita | 0x5053565f | PSV_      |
| Wii U            | 0x57494955 | WIIU      |
| Nintendo Switch  | 0x4e584e58 | NXNX      |
| Windows          | 0x57494e5f | WIN_      |
| None             | 0x4e4f4e45 | NONE      | 

<!-- Ghidra flips the bytes bruhhhhhhhhhhh -->

> [!NOTE]
> Almost all values were found in the Wii U Edition executable.  
> None was only found on Xbox One Edition, it may or may not exist in others. - DexrnZacAttack
