# Level Format

## Byte Order

level.dat is stored in **Big Endian** byte order unless mentioned otherwise.

## Parsing level.dat

***Header***

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 4 | The version used to save the file. Always 1. Stored in **Little Endian** |
| Size | 4 | The size of the file subtracting the header. Stored in **Little Endian** |

***Global World Data***

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Seed | 4 | The seed of the world |
| Spawn X | 4 | The X coordinate of the world spawn point |
| Spawn Y | 4 | The Y coordinate of the world spawn point |
| Spawn Z | 4 | The Z coordinate of the world spawn point |
| Estimated World Size | 8 | The world size represented in bits |
| Last Played | 4 | Unix timestamp indicating when the level was last saved.[\[1\]](#1) |
| World Name Length | 2 | The length of the world name. |
| World Name | Variable | A [CP437](https://en.wikipedia.org/wiki/Code_page_437) encoded string. |

## Notes

1. <a id="1"></a> Will overflow and become negative at **03:14:08 UTC on 19 January 2038** due to [the year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem) and will overflow every ~136 years after that.

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/v0.1.0_alpha#level.dat) with some wording tweaked and/or simplify