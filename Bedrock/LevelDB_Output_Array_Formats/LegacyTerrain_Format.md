# Legacy Terrain (`0`) Format

## Byte Order

LegacyTerrain bytes are stored in **Little Endian** byte order.

## Parsing The LegacyTerrain

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Block IDs | 32,768 | Block IDs defining the terrain. 8 bits per block, stored in YZX order[\[1\]](#1) (Y increments first) |
| Block Data | 16,384 | Block data additionally defining parts of the terrain. 4 bits per block, stored in YZX order (Y increments first) |
| Sky light | 16,384 | The amount of sunlight or moonlight hitting each block. 4 bits per block, stored in YZX order (Y increments first) |
| Block light | 16,384 | The amount of block-emitted light in each block. 4 bits per block, stored in YZX order (Y increments first) |
| Heightmap | 256 | Each byte records the lowest level in each column where the light from the sky is at full strength. Stored in ZX order[\[2\]](#2) (Z increments first) |
| 2D Biome data | 1,024 | Each entry of the biome array contains a biome ID in the first byte, and the final 3 bytes are red/green/blue color values respectively |

## Related
Second block layer for LegacyTerrain: [LegacyBlockExtraData (`4`)](./LegacyBlockExtraData_Format.md)

## Notes
1. <a id="1"></a> Index is calculated with `(X << 11) | (Z << 7) | Y`
2. <a id="2"></a> Index is calculated with `X × 16 + Z`
