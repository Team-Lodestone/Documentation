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
| Palette Version | 1 | Seems to always be 1 |
| Bits Per [Word](https://en.wikipedia.org/wiki/Word_(computer_architecture)) | 7 | How many bits are used for each word. If 127 skip to reading the next palette version/bits per word (null section). If 0 skip to reading a single ***Biome ID***. |

### If Version is 1

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Biome Indices | ceil(4096[\[1\]](#1) ÷ *Blocks Per Word[\[2\]](#2))* × 4 | Stored as *Blocks Per Word* indices, with each unsigned 32-bit integer containing multiple indices, each occupying ***Bits Per Word*** bits. The indices are packed and stored in YZX order (Y increments first). |
| Palette Size | 4 | The number of Biome palettes stored. |

Now loop the next section `Palette Size` times until you have parsed all biome ids.

| Name | Size (in byte) | Description |
|------|----------------|-------------|
| [Biome ID](https://minecraft.wiki/w/Biome#Biome_IDs) | 4 | A biome Id. Stored as 32-bit unsigned integers. |

## Notes

1. <a id="1"></a> In some languages you may need to write this as `4096.0` instead of just `4096` for the correct output.
2. <a id="2"></a> Blocks Per Word = floor(32 ÷ [Bits Per Word](#bits-per-word))
