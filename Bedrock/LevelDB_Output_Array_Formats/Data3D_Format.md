# Data3D (`+`) Format

## Byte Order

Data3D data is stored in **Little Endian** byte order.

## Parsing Data3D

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Heightmap | 512 | The heightmap for the chunk. Subtract 64 to get the real Y coordinate. Stored as 16-bit integers. ZX order (Z increments first) |

Loop next section `24` times until you have parsed all subchunks biome palettes.

| Name | Size (in bits) | Description |
|------|----------------|-------------|
| Palette Version | 1 | Seems to always be 1. Stored in the least-significant/right-most bit. |
| <a id="bits-per-index"></a> Bits Per Index | 7 | How many bits are used for each index into the palette. Stored in the 7 most-significant/left-most bits. May be one of `0,1,2,3,4,5,6,8,16,127`. If 127 (null section) skip to reading the next `palette version`/`bits per index`. If 0 skip to reading a single ***Biome ID***. |

### If Version is 1

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Biome Indices | ceil(4096[\[1\]](#1) ÷ *Indices Per Block[\[2\]](#2))* × 4 | Stored in blocks of 32 bits, with each block containing *Indices Per Block* indices, each occupying ***Bits Per Index*** bits. If ***Bits Per Index*** is `3`, `5` or `6`, then 2 bits of padding are on the most-significant/left-most side of each block, with indices packed into the remaining 30 bits. The indices are packed and stored in YZX order (Y increments first). |
| Palette Size | 4 | The number of Biome palettes stored. |

Now loop the next section `Palette Size` times until you have parsed all biome ids.

| Name | Size (in byte) | Description |
|------|----------------|-------------|
| [Biome ID](https://minecraft.wiki/w/Biome#Biome_IDs) | 4 | A biome Id. Stored as 32-bit unsigned integers. |

## Notes

1. <a id="1"></a> In some languages you may need to write this as `4096.0` instead of just `4096` for the correct output.
2. <a id="2"></a> Indices Per Block = floor(32 ÷ [Bits Per Index](#bits-per-index))