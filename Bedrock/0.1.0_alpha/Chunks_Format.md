# Chunks Format

## Byte Order

chunks.dat is stored in **Little Endian** byte order.

## Parsing Chunks

Loop the next section `1024` times until you have parsed all chunks.

***Header***

| Name | Size (in bytes) | Description |
|------|------|-------------|
| Chunk Data Size | 1 | Sector size. In practice this is always 21 (0x15). Multiply this value by 4096. |
| Chunk Data Location (in 4kb sectors) | 3 | How many 4kb sectors from the start of the file until the chunk data starts. Multiply this value by 4096. |

**If Chunk Data Size is greater than 0**

***Chunk Data***

**NOTE**: Chunks in this version do not store their position and will need to be calculated. Chunks are stored starting at chunk 0,0 and increment in the positive X direction first `32` times then the positive Z direction for a total of a `32×32` chunk area. The game only uses a `16×16` area but the unused chunks are stored still.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| A Chunks Block IDs | 32,768 | A single chunks block ids. Stored in a 3D 8-bit integer array. YZX order (Y increments first) |
| A Chunks Blocks Data Values | 16,384 | A single chunks block data values. Stored in a 3D 8-bit integer array. YZX order (Y increments first) |
| A Chunks Skylight | 16,384 | A single chunks skylight data. Stored in a 3D 8-bit integer array. YZX order (Y increments first) |
| A Chunks Blocklight | 16,384 | A single chunks blocklight data. Stored in a 3D 8-bit integer array. YZX order (Y increments first) |
| A Chunks Biome IDs | 256 | A single chunks biome ids. Stored in a 2D 8-bit integer array. ZX order (Z increments first) |
