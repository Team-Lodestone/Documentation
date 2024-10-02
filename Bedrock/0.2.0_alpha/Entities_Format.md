# Entities Format

## Byte Order

entities.dat is stored in **Little Endian** byte order.

## Parsing Entities

### Part 1 (Getting the NBT with the Entities and TileEntities)

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Magic | 4 | The magic number used to identify the entities file. Always `0x454E5400` or `ENT` |
| Version | 4 | The version of the entities format. Always 1 |
| NBT Compound Size | 4 | The length of the NBT Compound in bytes |
| NBT Compound | Variable | The NBT Compound holding the Entities and TileEntities |

### Part 2 (Getting Entities and TileEntities Data)

***Entities***

| Tag Name | Tag Type | Description |
|------|----------|-------------|
| Entities | ListTag of CompoundTags | List of all the entities in the world. Each CompoundTag is an Entity. |

***TileEntites***

| Tag Name | Tag Type | Description |
|------|----------|-------------|
| TileEntities | ListTag of CompoundTags | List of all the tile entities in the world. Each CompoundTag is a Tile Entity. |
