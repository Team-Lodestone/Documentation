# Level Format

## Byte Order

The level data is stored in **Big Endian** byte order.

## Level Data

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Blocks | 4,194,304 (256×256×64) | All the blocks in the world. XZY order (X increments first)[\[1\]](#1) |

## Notes
1. <a id="1"></a> The index can be calculated with `(y × 256 + z) × 256 + x`
