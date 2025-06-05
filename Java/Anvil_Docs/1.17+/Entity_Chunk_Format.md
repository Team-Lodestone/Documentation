# Entity Chunk Format

## Byte order

Entity Chunk data is stored in **Big Endian** byte order.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **DataVersion**: Version of the chunk NBT structure. {.nbt .int}
    * **Position**: The chunks X, Z coordinates. Index 0 = X, Index 1 = Z. {.nbt .intArray}
        * X coordinate. {.nbt .int}
        * Z coordinate. {.nbt .int}
    * **Entities**: ListTag of CompoundTags | Each CompoundTag is an entity. {.nbt .list}
        * An entity. See [Entity format](https://minecraft.wiki/w/Entity_format#Entity_format) for details. {.nbt .compound}

</div>

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Entity_format#NBT_structure) with some wording tweaked and/or simplify
