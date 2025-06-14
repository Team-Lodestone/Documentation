# Entity Format

### Arrow

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Arrow` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **inGround**: 1 or 0 (true/false) - if true, the arrow is stuck in the ground. {.nbt .byte}
    * **inTile**: The id of the block the arrow is stuck in. {.nbt .byte}
    * **shake**: Ticks until the arrow can be picked up by players. This is set to 7 when the arrow initially hits a block. {.nbt .byte}
    * **xTile**: X coordinate of the arrows position in the chunk. {.nbt .short}
    * **yTile**: Y coordinate of the arrows position in the chunk. {.nbt .short}
    * **zTile**: Z coordinate of the arrows position in the chunk. {.nbt .short}

</div>

### Creeper

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Creeper` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Falling Sand

Added in `Infdev 20100618`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `FallingSand` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Tile**: The id of the block this falling sand represents. {.nbt .byte}

</div>

### Giant

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Giant` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Item

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Item` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Age**: The number of ticks the item has been "untouched". After 6000 ticks (5 minutes) the item is destroyed. {.nbt .short}
    * **Item**: The inventory item, without the Slot tag. {.nbt .compound}
        * **id**: The item ID. {.nbt .short}
        * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
        * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

### Minecart

Added in `Infdev 20100618`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Minecart` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Items**: List of CompoundTags, one for each item stack in the minecart. {.nbt .list}
        * A item stack. {.nbt .compound}
            * **Slot**: The slot the item is in. {.nbt .byte}
            * **id**: The item ID. {.nbt .short}
            * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
            * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

### Mob

Removed in `Beta 1.2`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Mob` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Monster

Removed in `Beta 1.8`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Monster` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Pig

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Pig` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Sheep

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Sheep` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Sheared**: 1 or 0 (true/false) - true if the sheep has been shorn. {.nbt .byte}

</div>

### Skeleton

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Skeleton` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Spider

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Spider` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Painting

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Painting` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Dir**: The direction the painting is facing. 3 is south, 4 is west, 2 is north, 5 is east {.nbt .byte}
    * **Motive**: The id of the painting variant. {.nbt .string}
    * **TileX**: The X coordinate of the block the painting is in. {.nbt .int}
    * **TileY**: The Y coordinate of the block the painting is in. {.nbt .int}
    * **TileZ**: The Z coordinate of the block the painting is in. {.nbt .int}

</div>

### Primed TNT

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `PrimedTnt` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}
    * **Fuse**: Number of ticks until explosion. {.nbt .byte}

</div>

### Zombie

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Zombie` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Health**: The number of hit points this entity has. 20 is 10 hearts. {.nbt .short}
    * **AttackTime**: Number of ticks this entity is immune to attacks. {.nbt .short}
    * **HurtTime**: Number of ticks this entity is red from being attacked. {.nbt .short}
    * **DeathTime**: Number of ticks this entity has been dead for - used for controlling the death animation. {.nbt .short}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

## Notes

1. <a id="1"></a> Entities in versions between `Infdev 20100327` and `Infdev 20100415` don't spawn due to a bug that causes the list to always be empty, without the use of external editors to hack in entities.