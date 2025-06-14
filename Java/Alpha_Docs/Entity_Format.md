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

### Boat

Added in `Alpha 1.0.6`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Boat` {.nbt .string}
    * **Pos**: List of 3 DoubleTags for the X, Y, and Z position of this entity. {.nbt .list}
    * **Rotation**: List of 2 FloatTags for the yaw and pitch of this entity's view. {.nbt .list}
    * **Motion**: List of 3 DoubleTags for the X, Y, and Z motion in meters per tick. {.nbt .list}
    * **OnGround**: 1 or 0 (true/false) - true if this entity is on the ground. {.nbt .byte}
    * **FallDistance**: How far this entity has fallen. {.nbt .float}
    * **Air**: The number of ticks before this entity starts to drown. Starts at 300. {.nbt .short}
    * **Fire**: When negative, the number of ticks before this entity can catch on fire. When positive, the number of ticks before the fire is extinguished. {.nbt .short}

</div>

### Chicken

Added in `Alpha 1.0.14`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Chicken` {.nbt .string}
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

### Cow

Added in `Alpha 1.0.8`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Cow` {.nbt .string}
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

### Ghast

Added in `Alpha 1.2.0`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Ghast` {.nbt .string}
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
    * **Type**: Determines the minecart type. 0 is for the normal minecart. *Added in Alpha 1.0.14*. {.nbt .int}
    * **Items**: List of CompoundTags, one for each item stack in the minecart. *Removed in Alpha 1.0.14*. {.nbt .list}
        * A item stack. {.nbt .compound}
            * **Slot**: The slot the item is in. {.nbt .byte}
            * **id**: The item ID. {.nbt .short}
            * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
            * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

### Minecart with Chest

Added in `Alpha 1.0.14`

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
    * **Type**: Determines the minecart type. 1 is for the Minecart with Chest. {.nbt .int}
    * **Items**: List of CompoundTags, one for each item stack in the minecart. {.nbt .list}
        * A item stack. {.nbt .compound}
            * **Slot**: The slot the item is in. {.nbt .byte}
            * **id**: The item ID. {.nbt .short}
            * **Damage**: The item's data value, or damage value for tools. {.nbt .short}
            * **Count**: The number of this item in the stack. Range -128 - 127. Values less then 2 are not displayed in-game. {.nbt .byte}

</div>

### Minecart with Furnace

Added in `Alpha 1.0.14`

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
    * **Type**: Determines the minecart type. 2 is for the Minecart with Furnace. {.nbt .int}
    * **Fuel**: The number of ticks until the minecart runs out of fuel. {.nbt .short}
    * **PushX**: Force along X axis, used for smooth acceleration/deceleration. {.nbt .double}
    * **PushZ**: Force along Z axis, used for smooth acceleration/deceleration. {.nbt .double}

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
    * **Color**: The color of the sheep, values are 0 to 15 - 0 is white, 1 is orange, 2 is magenta, 3 is light blue, 4 is yellow, 5 is lime, 6 is pink, 7 is gray, 8 is light gray, 9 is cyan, 10 is purple, 11 is blue, 12 is brown, 13 is green, 14 is red, and 15 is black. *Added in Beta 1.2*. {.nbt .byte}

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

### Slime

Added in `Alpha 1.0.11`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Slime` {.nbt .string}
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
    * **Size**: The size of the slime. Note that this is zero-based, so 0 is the smallest slime, 1 is the next larger, etc. The sizes that spawn naturally are 0, 1, and 3. {.nbt .int}

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

### Squid

Added in `Beta 1.2`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `Squid` {.nbt .string}
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

### Zombie Pigman

Added in `Alpha 1.2.0`

<div id="treeview">

* An entity. {.nbt .compound}
    * **id**: The id of this entity. In this case `PigZombie` {.nbt .string}
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
    * **Angry**: 1 or 0 (true/false) - true if the Zombie Pigman is aggressive towards players. {.nbt .byte}

</div>
