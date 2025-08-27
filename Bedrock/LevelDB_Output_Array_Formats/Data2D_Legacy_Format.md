# Data2D (`.`) Format

## Byte Order

Data2D data is stored in **Little Endian** byte order.

## Parsing Data2D

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Heightmap | 512 | The heightmap for the chunk. Stored as 16-bit integers. ZX order (Z increments first) |
| 2D Biomes | 1024 | Each entry of the biome array contains a [biome ID](https://minecraft.wiki/w/Biome#Biome_IDs) in the first byte, and the final 3 bytes are red/green/blue color values respectively. Stored as 32-bit integers. ZX order (Z increments first) |
