# Development Progress

![Minecraft Manipulator Logo](Assets/MMP.png)

# Minecraft Manipulator

**Please note that this project is STILL IN DEVELOPMENT!**

A single program that is able to edit and convert Minecraft worlds. The tool supports Minecraft: Java Edition, Bedrock Edition, Education Edition, all 4J Studios Console Editions and NetEase Bedrock Edition (China Edition). There are so many amazing features still in development that will expand the capabilities of the upcoming tool. Keep an eye out for these additions, you won't be disappointed!

| Edition                 | Supported Versions |
|-------------------------|--------------------|
| Java Edition            | 1.3.0 - 1.20       |
| Bedrock Edition         | 1.0.0 - 1.20       |
| PlayStation 3 Edition   | TU0 - TU73         |
| Xbox 360 Edition        | TU0 - TU73         |
| Wii U Edition           | TU0 - TU73         |
| PlayStation Vita Edition | TU0 - TU73        |
| PlayStation 4 Edition   | Coming Soon       |
| 3DS Edition             | Coming Soon       |

# Table of Contents

1. [Development Progress](#development-progress)
2. [Minecraft Manipulator](#minecraft-manipulator)
   - [The full project](#the-full-project)
   - [How can I contribute?](#how-can-i-contribute)
   - [What is the state of this project?](#what-is-the-state-of-this-project)
   - [Roadmap / Progress](#roadmap-progress)
3. [Features](#features)
   - [Main Feature List](#main-feature-list)
   - [Raw Editors Module](#raw-editors-module)
     - [NBT Editor](#nbt-editor)
     - [Hex Editor](#hex-editor)
     - [LevelDB Browser](#leveldb-browser)
     - [Datapacks Editor](#datapacks-editor)
   - [World Sculptor Module](#world-sculptor-module)
     - [World Sculptor](#world-sculptor)
   - [Game Object Tools Module](#game-object-tools-module)
     - [Map Item Image Modifier](#map-item-image-modifier)
     - [Entity Data Editor](#entity-data-editor)
     - [Resource/Texture Pack Converter](#resource/texture-pack-converter)
     - [Book Editor](#book-editor)
     - [GRF Editor](#grf-editor)
   - [World Editors Module](#world-editors-module)
     - [World Converter](#world-converter)
     - [World Editor](#world-editor)
   - [Core Framework](#core-framework)

## The full project

The project has been divided into the following components:

- Core Project / App: This is the main application that powers the tool. You can find the code on [MM/App](https://github.com/Minecraft-Manipulator/App).
- Main Documentation: This repository contains the main documentation for the project. You can find it on [MM/Minecraft-Manipulator](https://github.com/Minecraft-Manipulator/Minecraft-Manipulator).
- Website: This repository contains the code for the project's website. You can find it on [MM/Website](https://github.com/Minecraft-Manipulator/Website).
- Libraries: This repository contains the libraries used in the project. You can find it on [UtterEvergreen1/Minecraft-Manipulator-libraries](https://github.com/UtterEvergreen1/Minecraft-Manipulator-libraries).
- Documentation: This repository contains the technical documentation for the Minecraft LCE (Legacy Console Editions) and is hosted on [MM/Minecraft-LCE-Documentation](https://github.com/Minecraft-Manipulator/Minecraft-LCE-Documentation).

## How can I contribute?

Submit a pull request, or ask `EternalModz#7322` on Discord for push access to the repository.

## What is the state of this project?

The project is under active development, and the team is growing bigger every day!

## Roadmap / Progress

Check the 'progress and roadmap' section of this repo in order to see the progress on this project.

## 👇 These are the features that we plan on integrating into our tool

### Features

# Main Feature List

## Raw Editors Module

### NBT Editor

- A modern NBT editor with S-NBT functionality.
- Features:
  - Display assets based on NBT tags.
  - Visualize enchanted items accurately.
  - Customize text color for NBT tags.

### Hex Editor

- Edit files in binary or hexadecimal formats with ease.

### LevelDB Browser

- Seamlessly browse and search through the Minecraft Bedrock world database entries.

### Datapacks Editor

- Edit Minecraft datapacks using the mcfunction format.

## World Sculptor Module

### World Sculptor

- Precision World Editing: Shape and refine your Minecraft worlds with precision and ease.
- Cross-Platform Compatibility: Works seamlessly on Java, Bedrock, and Legacy Console editions.
- Limitless Pruning: No chunk limits, eliminating the need for multiple passes.
- Streamlined Complexity: Create complex selections with layered simple shapes, no scripting or confusing logic.
- 'Simple Shape' Selectors:
  - Box: Select rectangular chunks with control points.
  - Circle: Choose circular chunk areas.
  - Split: Select chunks infinitely in any direction.
- Visual Selection Viewer: Preview and edit selections in an intuitive world viewer with real-time updates.
- Nondestructive Editing: Operates on a world copy, changes take effect upon manual save.
- "Keep" Mode: Protect areas from deletion by toggling a selection layer to "Keep."

# Game Object Tools Module

## Map Item Image Modifier

- Effortlessly modify images associated with map items.

## Entity Data Editor

- Edit various entity data, including:
  - Inventory
  - Armor
  - Player stats
  - Effects
  - Variants
  - Brain
  - Villager trades
  - And more.

## Resource/Texture Pack Converter

- Convert resource and texture packs efficiently, including:
  - JSON conversion
  - Resource pack conversion
  - Texture pack conversion (via PCK Studio)

## Book Editor

- Edit in-game books and written content effortlessly.

## GRF Editor

- Edit GRF files with raw editing support.

# World Editors Module

## World Converter

- Convert Minecraft worlds with highly customizable options, including:
  - Depth fixing
  - Lighting recalculation
  - Heightmap recalculation
  - Support for partially-generated chunks
  - Output version targeting
  - Mixed output chunk versioning

## World Editor

- Create and edit Minecraft worlds with advanced features:
  - Biome replacement
  - Custom terrain
  - Custom structures
  - Custom biomes
  - Brushes and tools for editing
  - Community-made brushes integration

# Core Framework

- Core Framework features include:
  - APIs for World Operations, Communication, Scripting, and Script Execution.
  - Efficient Script Editing and Management.
  - Streamlined Desktop Installation and Settings Management.
  - Scalability with support for Automatic Updates.
  - Discord RPC integration and Keyboard Shortcuts for enhanced usability.
  - Robust Undo/Redo functionality and Clipboard support (Copy/Paste).
  - Seamless Integration with VS Code for an enhanced development experience.
