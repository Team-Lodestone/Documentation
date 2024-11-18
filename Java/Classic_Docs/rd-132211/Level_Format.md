# Level Format

## Byte Order

The level data is stored in **Big Endian** byte order.

## Level Data

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Blocks | 4,194,304 (256×256×64) | All the blocks in the world. YZX order (Y increments first) |
