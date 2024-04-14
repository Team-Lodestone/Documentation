# Minecraft Legacy Console Edition GRF (Game Rule File) Documentation

Welcome to the documentation for Minecraft Legacy Console Edition's GRF (Game Resource File) and Game Rule files. This guide will provide you with an overview of these files, how they work, and their structure.

## Table of Contents
1. [Introduction](#introduction)
2. [GRF Files](#grf-files)
    2.1 [What are GRF Files?](#what-are-grf-files)
    2.2 [How GRF Files Work](#how-grf-files-work)
    2.3 [GRF File Structure](#grf-file-structure)
3. [Game Rule Files](#game-rule-files)
    3.1 [What are Game Rule Files?](#what-are-game-rule-files)
    3.2 [How Game Rule Files Work](#how-game-rule-files-work)
    3.3 [Game Rule File Structure](#game-rule-file-structure)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## 1. Introduction
Minecraft Legacy Console Edition uses GRF (Game Resource File) and Game Rule files to manage and customize game resources and features. These files play a crucial role in modding and tweaking the game's behavior. This documentation will help you understand how these files work and their structure.

## 2. GRF Files
### 2.1 What are GRF Files?
GRF (Game Resource File) is a type of file used in Minecraft Legacy Console Edition to store various game resources, including textures, sounds, and other data. These files are essential for customizing the game's appearance and functionality.

### 2.2 How GRF Files Work
GRF files are loaded by the game to provide the necessary resources for the gameplay. You can create and modify these files to change textures, sounds, or other game assets. Understanding the structure of GRF files is vital for effective customization.

### 2.3 GRF File Structure
A typical GRF file consists of the following components:
- **Header**: Contains metadata and file information.
- **Entries**: Store the actual game resources, such as textures and sounds.
- **Index Table**: Maintains a list of resources and their locations within the file.

## 3. Game Rule Files
### 3.1 What are Game Rule Files?
Game Rule files are configuration files in Minecraft Legacy Console Edition that control various aspects of the game's behavior. These files allow you to customize game rules, gameplay mechanics, and other features.

### 3.2 How Game Rule Files Work
Game Rule files are read by the game to apply specific rules or modifications to the gameplay. By editing these files, you can adjust in-game parameters and create unique gameplay experiences.

### 3.3 Game Rule File Structure
A typical Game Rule file includes:
- **Sections**: Divided into different sections for various aspects of the game.
- **Key-Value Pairs**: Used to specify rules or settings.
- **Comments**: Add notes and explanations for clarity.

## 4. Usage
To use GRF and Game Rule files effectively, you'll need a basic understanding of file formats, data structures, and the game's mechanics. You can modify or create these files using text editors, and you should always make backups before making changes.

## 5. Contributing
If you'd like to contribute to this documentation or share your knowledge about GRF and Game Rule files in Minecraft Legacy Console Edition, feel free to submit pull requests or open issues.

## 6. License
This documentation is released under the [MIT License](LICENSE), granting you the freedom to use and distribute it as needed.

# Minecraft Legacy Console Edition Game Rule File Documentation

## Introduction
The Game Rule File is used for managing and customizing game rules in Minecraft Legacy Console Edition. This documentation provides an overview of the Game Rule File structure, its components, and how it is used.

## Namespace and Class
- **Namespace**: OMI.Workers.GameRule
- **Class**: GameRuleFile

## Valid Game Rules
The GameRuleFile class contains a list of valid game rules. Here's a list of the game rules available in the Minecraft Legacy Console Edition:

- MapOptions
- ApplySchematic
- GenerateStructure
- GenerateBox
- PlaceBlock
- PlaceContainer
- PlaceSpawner
- BiomeOverride
- StartFeature
- AddItem
- AddEnchantment
- WeighedTreasureItem
- RandomItemSet
- DistributeItems
- WorldPosition
- LevelRules
- NamedArea
- ActiveChunkArea
- TargetArea
- ScoreRing
- ThermalArea
- PlayerBoundsVolume
- Killbox
- BlockLayer
- UseBlock
- CollectItem
- CompleteAll
- UpdatePlayer
- OnGameStartSpawnPositions
- OnInitializeWorld
- SpawnPositionSet
- PopulateContainer
- DegradationSequence
- RandomDissolveDegrade
- DirectionalDegrade
- GrantPermissions
- AllowIn
- LayerGeneration
- LayerAsset
- AnyCombinationOf
- CombinationDefinition
- Variations
- BlockDef
- LayerSize
- UniformSize
- RandomizeSize
- LinearBlendSize
- LayerShape
- BasicShape
- StarShape
- PatchyShape
- RingShape
- SpiralShape
- LayerFill
- BasicLayerFill
- CurvedLayerFill
- WarpedLayerFill
- LayerTheme
- NullTheme
- FilterTheme
- ShaftsTheme
- BasicPatchesTheme
- BlockStackTheme
- RainbowTheme
- TerracottaTheme
- FunctionPatchesTheme
- SimplePatchesTheme
- CarpetTrapTheme
- MushroomBlockTheme
- TextureTheme
- SchematicTheme
- BlockCollisionException
- Powerup
- Checkpoint
- CustomBeacon
- ActiveViewArea

## Class Structure
- **GameRuleFile Class**: This class represents the Game Rule File and provides methods for adding game rules and managing the file.
  - **Properties**: 
    - `Root`: The root game rule.
    - `Header`: The header of the game rule file.
    - `Compression`: The compression type used for the file.
  - **Methods**:
    - `AddGameRules(gameRules)`: Add a list of game rules to the file.
    - `AddRule(gameRuleName)`: Add a new game rule.
    - `AddRule(gameRuleName, validate)`: Add a new game rule with optional validation.
    - `AddRule(gameRuleName, parameters)`: Add a new game rule with parameters.

## GameRule Class
- The GameRule class represents an individual game rule within the Game Rule File. Each game rule has a name, parent rule, parameters, and child rules.
- **Properties**:
  - `Name`: Name of the game rule.
  - `Parent`: The parent rule.
  - `Parameters`: A dictionary of parameters associated with the game rule.
  - `ChildRules`: A list of child rules.

## Valid Parameters
The GameRule class contains a list of valid parameters that can be associated with a game rule. These parameters are used to define specific aspects of the game rule.

## Compression Options
The Game Rule File supports different compression levels and types. The available compression options are as follows:
- None: No compression.
- Zlib: Zlib compression is used on PS Vita, Wii U, and Nintendo Switch.
- Deflate: Deflate compression used on PlayStation 3.
- XMem: XMem compression is used on Xbox 360.

## Constructors (OMI By PhoenixARC)
- `GameRuleFile()`: Initializes a new Game Rule File with no compression.
- `GameRuleFile(header)`: Initializes a new Game Rule File with a specified header and Zlib compression.
- `GameRuleFile(header, compressionType)`: Initializes a new Game Rule File with a specified header and compression type.

## Usage
Feel free to use this information however you would like! Note that this documentation is still a work in progress though.

## Contributing
If you wish to contribute to this documentation or have any additional information about the usage of Game Rule Files in Minecraft Legacy Console Edition, please feel free to submit pull requests or open issues.

## License
This documentation is released under the GNU GPLv3 License, allowing you to use and distribute it as needed.

We hope this documentation helps you better understand GRF and Game Rule files in Minecraft Legacy Console Edition. If you have any questions or need further assistance, please don't hesitate to reach out.

Happy modding!
