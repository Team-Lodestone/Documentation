# Minecraft Legacy Console Edition NBT Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [NBT (Named Binary Tag) Overview](#nbt-named-binary-tag-overview)
3. [Legacy Console Edition Overview](#legacy-console-edition-overview)
4. [NBT Structure Format](#nbt-structure-format)
5. [NBT Data Types](#nbt-data-types)
6. [Legacy Console Edition NBT Structures](#legacy-console-edition-nbt-structures)
   - [Player Data](#player-data)
   - [Inventory Data](#inventory-data)
   - [World Data](#world-data)
7. [Data Storage on Legacy Consoles](#data-storage-on-legacy-consoles)
8. [Example Usage](#example-usage)
9. [Tips and Best Practices](#tips-and-best-practices)
10. [References](#references)

## 1. Introduction

Minecraft Legacy Console Edition refers to versions of Minecraft released for older gaming consoles like Xbox 360, PlayStation 3 (PS3), and Wii U. These editions use a data storage format called NBT (Named Binary Tag) to store various types of game data, including player information, inventory contents, and world data.

## 2. NBT (Named Binary Tag) Overview

Named Binary Tag (NBT) is a binary serialization format used in Minecraft to structure and store data. NBT is composed of named tags, each with a data type and value. This system allows for flexible and organized data storage.

## 3. Legacy Console Edition Overview

The Legacy Console Editions of Minecraft were designed for consoles like PS3, Xbox 360, and Wii U. They feature slightly different gameplay and limitations compared to the PC version. These editions had to optimize their data storage due to console hardware constraints.

## 4. NBT Structure Format

NBT data is organized hierarchically in a tree-like structure. Tags contain a name, a data type, and a value. Tags can be nested, forming complex data structures.

## 5. NBT Data Types

Minecraft Legacy Console Edition uses the following NBT data types:

- TAG_Byte: 8-bit signed integer
- TAG_Short: 16-bit signed integer
- TAG_Int: 32-bit signed integer
- TAG_Long: 64-bit signed integer
- TAG_Float: 32-bit floating point number
- TAG_Double: 64-bit floating point number
- TAG_ByteArray: Array of bytes
- TAG_String: Unicode string
- TAG_List: List of tags of the same type
- TAG_Compound: Nested tag compound
- TAG_IntArray: Array of 32-bit integers
- TAG_LongArray: Array of 64-bit integers

## 6. Legacy Console Edition NBT Structures

### Player Data
Player data on Legacy Console Edition is stored in NBT structures with information such as health, inventory, position, and more.

```
TAG_Compound
{
    "id": TAG_String("Player"),
    "Health": TAG_Float(20.0),
    "Inventory": TAG_List([...]),
    ...
}
```

## Inventory Data
Inventory data is stored within player NBT structures and represents the items a player carries.
```
TAG_List
[
    TAG_Compound {...},  # Item 1
    TAG_Compound {...},  # Item 2
    ...
]
```

## World Data
World data includes information about the game world, blocks, entities, and more. This data is saved in region files.
```
TAG_Compound
{
    "Level": TAG_Compound
    {
        "Blocks": TAG_Byte_Array([...]),
        "Entities": TAG_List([...]),
        ...
    }
}
```

## 7. Data Storage on Legacy Consoles
Each console stores Minecraft Legacy Console Edition data in a specific format:
Xbox 360: Data is saved in "save containers" using .dat files.
PlayStation 3 (PS3): Data is saved in "chunk files" using .dat files.
Wii U: Data is saved in directories with .bin and .dat files.

## 8. Example Usage
For instance, on PS3 Minecraft, to read player health:
```
import nbtlib

# Load player NBT data
player_file = nbtlib.load("player.dat")
player_data = player_file[""]

# Get player health
health = player_data["Health"]
print("Player health:", health)
```

## 9. Tips and Best Practices
Always backup your save data before modifying NBT structures.
Utilize NBT libraries or tools to prevent accidental data corruption.
Gain a solid understanding of NBT structure to make accurate changes.

## 10. References
Gamedata Parser by Offroaders123: GitHub
Legacy Console Edition Unused Features on Minecraft Fandom: Minecraft Fandom
Minecraft Legacy Console Edition Documentation by UtterEvergreen1: GitHub
Minecraft Legacy Console Edition Fandom NBT Search Results: Fandom
NBTLib Documentation: NBTLib Documentation

