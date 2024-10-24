### Endianness
| Console | Endianness |
| :-:|:-:|
| Xbox 360, PS3, Wii U                | Big    |
| Xbox One, PS Vita, Switch, PS4, 3DS | Little |

### LCE compression
| Platform | SAVEGAME | REGION | CHUNK/GRF |
| :-:|:-:|:-:|:-:|
| Switch  | Zlib                                                                | Split Save RLE | Zlib (+ RLE)
| PS4     | Zlib                                                                | Split Save RLE | Zlib (+ RLE?) <!-- rle unconfirmed but likely. -->
| XboxOne | Zlib                                                                | Split Save RLE | Zlib (+ RLE?) <!-- rle unconfirmed but likely. -->
| Xbox360 | XMemcompress/LZX                                                    | None           | XMemcompress/LZX (+ RLE)
| PS3     | [Deflate(Algorithm)](https://en.wikipedia.org/wiki/Deflate) or None | None           | Deflate(Algorithm) (+ RLE)
| WiiU    | Zlib                                                                | None           | Zlib (+ RLE)
| PSVita  | Vita RLE                                                            | None           | Zlib (+ RLE)
| 3DS     | Zlib                                                                | None           | Zlib (no RLE)
| Windows | Unknown                                                             | Unknown        | Unknown <!-- apparently this exists, source: ESavePlatform -->

#### note: Xbox One may be inaccurate. -Dexrn
### note: 3DS is not LCE so documentation will be off for it. -Cracko298
