# Tile Entity Format

### Chest

<div id="treeview">

* A tile entity. {.nbt .compound}
    * **id**: The id of this tile entity. In this case `Chest` {.nbt .string}
    * **x**: The X position of this tile entity. {.nbt .int}
    * **y**: The Y position of this tile entity. {.nbt .int}
    * **z**: The Z position of this tile entity. {.nbt .int}
    * **Items**: List of CompoundTags, one for each item stack in the container.[\[1\]](#1) {.nbt .list}
        * A item stack. {.nbt .compound}
            * **Slot**: The slot the item is in. {.nbt .byte}
            * **id**: The item ID. {.nbt .short}
            * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
            * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

### Furnace

<div id="treeview">

* A tile entity. {.nbt .compound}
    * **id**: The id of this tile entity. In this case `Furnace` {.nbt .string}
    * **x**: The X position of this tile entity. {.nbt .int}
    * **y**: The Y position of this tile entity. {.nbt .int}
    * **z**: The Z position of this tile entity. {.nbt .int}
    * **Items**: List of CompoundTags, one for each item stack in the container.[\[1\]](#1) {.nbt .list}
        * A item stack. {.nbt .compound}
            * **Slot**: The slot the item is in. {.nbt .byte}
            * **id**: The item ID. {.nbt .short}
            * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
            * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}
    * **BurnTime**: Number of ticks left before the current fuel run out. {.nbt .short}
    * **CookTime**: Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). It is reset to 0 if *BurnTime* reaches 0. {.nbt .short}

</div>

### Monster Spawner

Added in `Infdev 20100625-1917`

<div id="treeview">

* A tile entity. {.nbt .compound}
    * **id**: The id of this tile entity. In this case `MobSpawner` {.nbt .string}
    * **x**: The X position of this tile entity. {.nbt .int}
    * **y**: The Y position of this tile entity. {.nbt .int}
    * **z**: The Z position of this tile entity. {.nbt .int}
    * **EntityId**: The id of the entity this spawner spawns. {.nbt .string}
    * **Delay**: Number of ticks until the next spawn. If 0, it spawns immediately when a player enters its range. Has a random value set after spawning. {.nbt .short}

</div>

### Sign

Added in `Infdev 20100607`

<div id="treeview">

* A tile entity. {.nbt .compound}
    * **id**: The id of this tile entity. In this case `Sign` {.nbt .string}
    * **x**: The X position of this tile entity. {.nbt .int}
    * **y**: The Y position of this tile entity. {.nbt .int}
    * **z**: The Z position of this tile entity. {.nbt .int}
    * **Text1**: First row of text. {.nbt .string}
    * **Text2**: Second row of text. {.nbt .string}
    * **Text3**: Third row of text. {.nbt .string}
    * **Text4**: Fourth row of text. {.nbt .string}

</div>

## Notes

1. <a id="1"></a> Items in containers in `Infdev 20100327` don't save due to a bug that causes the list to always be empty, without the use of external editors to hack items into the container.