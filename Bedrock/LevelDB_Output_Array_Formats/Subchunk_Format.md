# Subchunk (`/`) Data Format

## Byte Order

Subchunk data is stored in **Little Endian** byte order.

## Parsing The Subchunk

**NOTE:** Bedrock subchunks are only saved to disk if they have changed since world generation.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 1 | The version of this subchunk. |

### If Version is 8 and 9

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Block Layer Count | 1 | The number of block layers this subchunk has. |
| Y-Index | 1 | The Subchunk Y Position (ranges from -4 to 19). (Only exists if ***Version*** is 9) |

Now loop the next section `Block Layer Count` times until you have parsed all block layers.

| Name | Size (in bits) | Description |
|------|----------------|-------------|
| Palette Type | 1 | The type of this palette (0 = Persistence, 1 = Runtime) |
| <a id="bits-per-word"></a> Bits Per [Word](https://en.wikipedia.org/wiki/Word_(computer_architecture)) | 7 | How many bits are used for each word. |

#### If Palette Type is 0

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Layer Indices | ceil(4096[\[1\]](#1) ÷ *Blocks Per Word[\[2\]](#2))* × 4 | Stored as *Blocks Per Word* indices, with each unsigned 32-bit integer containing multiple indices, each occupying ***Bits Per Word*** bits. The indices are packed and stored in YZX order (Y increments first). |
| NBT Palette Compound Count | 4 | The number of NBT compounds to parse |
| NBT Palette Compounds | Variable | Multiple NBT compounds of individual blocks of the palette used in this subchunk |

#### If Palette Type is 1 (Might not be used in practice)

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Layer Indices | ceil(4096[\[1\]](#1) ÷ *Blocks Per Word[\[2\]](#2))* × 4 | Stored as *Blocks Per Word* indices, with each unsigned 32-bit integer containing multiple indices, each occupying ***Bits Per Word*** bits. The indices are packed and stored in YZX order (Y increments first). |
| NBT Palette Compound Count | 1 Signed VarInt ([ZigZag](https://gist.github.com/mfuerstenau/ba870a29e16536fdbaba)) | The number of NBT compounds to parse |
| NBT Palette Compounds | Variable | Multiple NBT compounds of individual blocks of the palette used in this subchunk |

<hr style="height:5px;margin-top:25px">

### If Version is 0 or between 2 and 7

**NOTE:** Second block layer for this version uses [LegacyBlockExtraData (`4`)](./LegacyBlockExtraData_Format.md) key instead, rather then being stored with the subchunk like in newer versions of the format.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Block IDs | 4096 | 8 bits per block. All the block ids for this chunk stored in YZX order (Y increments first) |
| Block Data | 2048 | 4 bits per block. All the data values for the blocks in this chunk stored in YZX order (Y increments first) |
| Skylight | 2048 | 4 bits per block. May be omitted. All the skylight data for this chunk stored in YZX order (Y increments first) |
| Blocklight | 2048 | 4 bits per block. May be omitted. All the blocklight data for this chunk stored in YZX order (Y increments first) |

## Notes
1. <a id="1"></a> In some languages you may need to write this as `4096.0` instead of just `4096` for the correct output.
2. <a id="2"></a> Blocks Per Word = floor(32 ÷ [Bits Per Word](#bits-per-word))
