# Entities Format

## Byte Order

entities.dat is stored in **Little Endian** byte order.

## Parsing Entities

### Part 1 (Getting the NBT with the Entities and TileEntities)

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic | 4 | The magic number used to identify the entities file. Always `0x454E5400` or `ENT`. |
| Version | 4 | The version of the entities format. Always 1. |
| NBT Compound Size | 4 | The length of the NBT compound in bytes. |
| NBT Compound | Variable | The NBT compound holding the entities and tile entities. |

### Part 2 (Getting Entities and TileEntities Data)

<div id="treeview">

* The root tag {.nbt .compound}
    * **Entities**: List of all the entities in the world. Each CompoundTag is an Entity. {.nbt .list}
    * **TileEntities**: List of all the tile entities in the world. Each CompoundTag is a Tile Entity. {.nbt .list}

</div>

## License & Credits

This file is licensed under `CC BY-NC-SA 3.0`.

The information here is from this [Minecraft wiki page](https://minecraft.wiki/w/Bedrock_Edition_level_format/History#entities.dat) with some wording tweaked and/or simplify
