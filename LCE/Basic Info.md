### Endianness
| Console | Endianness |
| :-:|:-:|
| Xbox 360, PS3, Wii U                | Big    |
| Xbox One, PS Vita, Switch, PS4, 3DS | Little |

### LCE compression
| Platform | SAVEGAME | REGION | CHUNK/GRF |
| :-:|:-:|:-:|:-:|
| Xbox360 | XMemcompress/LZX                                                    | None | XMemcompress/LZX (+ RLE)
| PS3     | [Deflate(Algorithm)](https://en.wikipedia.org/wiki/Deflate) or None | None | Deflate(Algorithm) (+ RLE)
| WiiU    | Zlib                                                                | None | Zlib (+ RLE)
| XboxOne | Zlib                                                                | None | Zlib (+ RLE?) <!-- rle unconfirmed but likely. -->
| PSVita  | Vita RLE                                                            | None | Zlib (+ RLE)
| Switch  | Zlib                                                                | Switch RLE | Zlib (+ RLE)
| 3DS     | Zlib                                                                | None | Zlib (no RLE)

#### note: Xbox One may be inaccurate. -Dexrn
### note: 3DS is not LCE so documentation will be off for it. -Cracko298
