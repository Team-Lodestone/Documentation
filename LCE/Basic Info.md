### Endianness
| Console                                              | Endian |
|:-----------------------------------------------------|:------:|
| Xbox 360, PS3, Wii U                                 |  Big   |
| Xbox One, PS Vita, Switch, PS4, 3DS, Windows, "NONE" | Little |

### LCE compression
| Platform | SAVEGAME                                                            | REGION                | CHUNK/GRF                                                      |
|----------|---------------------------------------------------------------------|-----------------------|----------------------------------------------------------------|
| Switch   | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE)                                                   |
| PS4      | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE?) <!-- rle unconfirmed but likely. -->             |
| Xbox One | Zlib                                                                | Split Save RLE/None   | Zlib (+ RLE?) <!-- rle unconfirmed but likely. -->             |
| Xbox 360 | XMemcompress/LZX                                                    | None                  | XMemcompress/LZX (+ RLE)                                       |
| PS3      | [Deflate(Algorithm)](https://en.wikipedia.org/wiki/Deflate) or None | None                  | Deflate(Algorithm) (+ RLE)                                     |
| Wii U    | Zlib                                                                | None                  | Zlib (+ RLE)                                                   |
| PS Vita  | Vita RLE                                                            | None                  | Zlib (+ RLE)                                                   |
| 3DS      | Zlib                                                                | None                  | Zlib (no RLE)                                                  |
| Windows  | Unknown                                                             | Unknown               | Unknown <!-- apparently this exists, source: ESavePlatform --> |

### ESavePlatform
Enum type (assumed by the name starting with E) that exists in Wii U Edition, which seems to hold all the platforms that LCE was compiled for.   
Various checks for a value inside this enum tells us a few things, namely support for certain features. (such as Split Saves)   

It seems these values got inlined by the compiler, so the enum has to be reconstructed manually.

| Assumed Name     | Value      | As String | As String (reversed) | 
|------------------|------------|-----------|----------------------|
| Xbox 360         | 0x30363358 | 063X      | X360                 |
| Xbox One         | 0x5f314258 | _1BX      | XB1_                 |
| PlayStation 3    | 0x5f335350 | _3SP      | PS3_                 |
| PlayStation 4    | 0x5f345350 | _4SP      | PS4_                 |
| PlayStation Vita | 0x5f565350 | _VSP      | PSV_                 |
| Wii U            | 0x55494957 | UIIW      | WIIU                 |
| Nintendo Switch  | 0x584e584e | XNXN      | NXNX                 |
| Windows          | 0x5f4e4957 | _NIW      | WIN_                 |
| None             | 0x454e4f4e | ENON      | NONE                 |

#### note: Xbox One may be inaccurate. -Dexrn
### note: 3DS is not LCE so documentation will be off for it. -Cracko298
