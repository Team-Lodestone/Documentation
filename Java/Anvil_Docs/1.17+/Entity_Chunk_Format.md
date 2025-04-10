# Entity Chunk Format

## Byte order

Entity Chunk data is stored in **Big Endian** byte order.

## Entity Chunk NBT Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| DataVersion | IntTag | Version of the chunk NBT structure. |
| [Entities](#entities-data) | ListTag of CompoundTags | Each CompoundTag is an entity. |
| Position | IntArrayTag | The chunks X, Z coordinates. Index 0 = X, Index 1 = Z. |

### Entities Data

An entity. See the [Minecraft Wiki page](https://minecraft.wiki/w/Entity_format#Entity_format) for details.

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Entity_format#NBT_structure) with some wording tweaked and/or simplify
