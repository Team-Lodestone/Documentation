# Level Format

## Byte Order

The level data is stored in **Big Endian** byte order.

## Level Data

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic Number | 4 | Identifier of the format. Always `27 1B B7 88`. |
| Version | 1 | Version of the format. Always `01`. |
| World Name | Variable | First 2 bytes will be a short for the length followed by the string. Always either `A Nice World` or `--` |
| Creator Name | Variable | First 2 bytes will be a short for the length followed by the string. |
| Time Created | 8 | A Unix timestamp of when the world was created. |
| Width | 2 | The width of the world (x direction) |
| Height | 2 | The depth of the world. (z direction)[\[1\]](#1) |
| Depth | 2 | The height of the world. (y direction)[\[1\]](#1) |
| Blocks | ***Width***×***Height***×***Depth*** | All the blocks in the world. XZY order (X increments first)[\[2\]](#2) |

## Notes
1. <a id="1"></a> Due to a bug in Minecraft Classic the `Height` and `Depth` values are swapped causing Height to be the Depth and Depth to be the Height.
2. <a id="2"></a> The index can be calculated with `(y × Height + z) × Width + x`

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Java_Edition_Classic_level_format#Second_format) with some wording tweaked and/or simplify
