# Chunk Format

## Byte Order

Chunk data is stored in **Big Endian** byte order.

## Parsing the Chunk

Every chunk is stored as 24 Subchunks located in the `sections` ListTag of CompoundTags which contain the subchunks `Y` coordinte, the block state palette, and the indices into the palette. Below is the NBT path to `sections` and its contents.

* `Root tag`
    * `sections`: ListTag
        * `Y`: ByteTag
        * `block_states`: CompoundTag
            * `palette`: ListTag
                * A block: CompoundTag
                    * `Name`: StringTag
                    * `Properties`: CompoundTag
                        * `Name`: StringTag
            * `data`: LongArrayTag
        * `biomes`: CompoundTag
            * `palette`: ListTag
                * `Name`: StringTag
            * `data`: LongArray
        * `BlockLight`: ByteArray
        * `SkyLight`: ByteArray

For more detail on each tag see the Minecraft wiki [page](https://minecraft.wiki/w/Chunk_format)

Now to parse the `data` array read the LongArrayTag into a Long Array to work with it easily then use the following.

Loop the next section `24` times until you have parsed all Sections of this chunk.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Palette Indices | ceil(4096[\[1\]]() ÷ *Blocks Per Word[\[2\]]()*) | Stored as *Blocks Per Word* indices, with each signed 64-bit integer containing multiple indices, each occupying **Bits Per Word** bits. The indices are packed and stored in XZY order (X increments first). |

You now have a Long/Int Array of 4096 indices that you can use to index the palette with something like `palette.get(indinces[xzy_index_from_for_loop])`

To parse Biomes its exactly the same just change `4096` to `64` in the indices count calculation.

## Notes
1. <a id="1"></a> In some languages you may need to write this as `4096.0` instead of just `4096` for the correct output.
2. <a id="2"></a> Blocks Per Word = floor(32 ÷ Bits Per Word). `Bits Per Word = 64 - palette.length().leadingZeros()`
