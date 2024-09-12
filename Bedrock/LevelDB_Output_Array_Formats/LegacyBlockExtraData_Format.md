# Legacy Block Extra Data (`4`) Format

## Byte Order

LegacyBlockExtraData is stored in **Little Endian** byte order.

## Parsing The LegacyBlockExtraData

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Extra Block Count | 4 | The number of extra blocks in this chunk |

Now loop the next section `Extra Block Count` times until you have parsed all extra blocks.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| <a id="block-location-index"></a> Block Location Index | 4 | The extra block location within this chunk represented as the index into the blockId array[\[1\]](#1) |
| Block ID | 1 | The extra blocks Id |
| Block Data | 1 | The extra blocks data value |

## Notes

1. <a id="1"></a> If used with Subchunks *([Subchunk Versions 0, 2 - 7](./Subchunk_Format.md#if-version-is-0-or-between-2-and-7))* the [Block Location Index](#block-location-index) stores the coordintes relative to the subchunk instead with the first byte containing the Y value in the right 4 bits, and the second byte containing the X value in the left 4 bits, and the Z value in the right 4 bits. The last 2 bytes are unused in this case. the index can then be calculated with `X × 16 × 16 + Z × 16 + Y`.
