# Level Format

## Byte Order

The level data is stored in **Big Endian** byte order.

## Level Data

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Blocks | 4,194,304 (256×256×64) | All the blocks in the world. XZY order (X increments first)[\[1\]](#1) |

## Notes
1. <a id="1"></a> The index can be calculated with `(y × 256 + z) × 256 + x`

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Java_Edition_Classic_level_format#First_format) with some wording tweaked and/or simplify
