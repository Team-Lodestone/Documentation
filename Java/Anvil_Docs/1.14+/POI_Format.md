# POI Format

## Byte order

Point of Interest data is stored in **Big Endian** byte order.

## POI NBT Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| DataVersion | IntTag | Version of the POI NBT structure. |
| Sections | CompoundTag | Each CompoundTag is a section of a chunk holding POI data for that section. |

***Sections Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| *section Y*[\[1\]](#1) | CompoundTag | Contains POI data for this section. |

***section Y Data***

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| [Records](#records-data) | ListTag of CompoundTags | Each CompoundTag is a point of interest block. |
| Vaild | ByteTag | Unknown, seems to always be a value of 1. |

### Records Data

| Tag Name | Tag Type | Description |
|----------|----------|-------------|
| free_tickets | IntTag | The number of villagers that can claim this POI block. Value decreases by 1 for each villager that claims the POI block. |
| pos | IntArrayTag | The POIs position in the world. |
| type | StringTag | Defines what type of POI this is. It is always one of the following: `minecraft:armorer`, `minecraft:bee_nest` (1.15+ Only), `minecraft:beehive` (1.15+ Only), `minecraft:butcher`, `minecraft:cartographer`, `minecraft:cleric`, `minecraft:farmer`, `minecraft:fisherman`, `minecraft:fletcher`, `minecraft:home`, `minecraft:leatherworker`, `minecraft:librarian`, `minecraft:lightning_rod` (1.17+ Only), `minecraft:lodestone` (1.16+ Only), `minecraft:mason`, `minecraft:meeting`, `minecraft:nether_portal` (1.15+ Only), `minecraft:shepherd`, `minecraft:toolsmith`, `minecraft:weaponsmith`. |

## Notes

1. <a id="1"></a> The sections `Y` value. A value between 0 and 15 or between -4 and 19 for 1.18+.
