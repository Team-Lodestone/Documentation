# POI Format

## Byte order

Point of Interest data is stored in **Big Endian** byte order.

## NBT structure

<div id="treeview">

* The root tag. {.nbt .compound}
    * **DataVersion**: Version of the POI NBT structure. {.nbt .int}
    * **Sections**: Each CompoundTag is a section of a chunk holding POI data for that section. {.nbt .compound}
        * \<section\>[\[1\]](#1): Contains POI data for this section. {.nbt .compound}
            * **Vaild**: 1 or 0 (true/false) - Most often true. If the value is false, the entries in `Records` are removed and the value is set back to true when the chunk is loaded the next time. {.nbt .byte}
            * **Records**: Each CompoundTag is a point of interest block. {.nbt .list}
                * A point of intrest block. {.nbt .compound}
                    * **type**: Defines what type of POI this is. It is always one of the following: `minecraft:armorer`, `minecraft:bee_nest` (1.15+ Only), `minecraft:beehive` (1.15+ Only), `minecraft:butcher`, `minecraft:cartographer`, `minecraft:cleric`, `minecraft:farmer`, `minecraft:fisherman`, `minecraft:fletcher`, `minecraft:home`, `minecraft:leatherworker`, `minecraft:librarian`, `minecraft:lightning_rod` (1.17+ Only), `minecraft:lodestone` (1.16+ Only), `minecraft:mason`, `minecraft:meeting`, `minecraft:nether_portal` (1.15+ Only), `minecraft:shepherd`, `minecraft:toolsmith`, `minecraft:weaponsmith`. {.nbt .string}
                * **free_tickets**: The number of villagers that can claim this POI block. Value decreases by 1 for each villager that claims the POI block. {.nbt .int}
                * **pos**: The POIs position in the world. {.nbt .intArray}
                    * X coordinate. {.nbt .int}
                    * Y coordinate. {.nbt .int}
                    * Z coordinate. {.nbt .int}

</div>

## Notes

1. <a id="1"></a> The sections `Y` value. A value between 0 and 15 or between -4 and 19 for 1.18+.
