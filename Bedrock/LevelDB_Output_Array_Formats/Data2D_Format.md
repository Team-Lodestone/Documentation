# Data2D (`-`) Format

## Byte Order

Data2D data is stored in **Little Endian** byte order.

## Parsing Data2D

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Heightmap | 512 | The heightmap for the chunk. Stored as 16-bit integers. ZX order (Z increments first) |
| 2D Biomes | 256 | Each value is a [biome id](https://minecraft.wiki/w/Biome#Biome_IDs). Stored as 8-bit integers. ZX order (Z increments first) |
