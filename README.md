# Development Progress
![Alt Text](Assets/MMP.png)

# Minecraft Manipulator
**Please note that this project is STILL IN DEVELOPMENT!**

A single program that is able to edit and convert Minecraft worlds. The tool supports Minecraft: Java Edition, Bedrock Edition, Education Edition, all 4J Studios Console Editions and NetEase Bedrock Edition (China Edition). There are so many amazing features still in development that will expand the capabilities of the upcoming tool. Keep an eye out for these additions, you won't be disappointed!

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
General Features
- [ ] LevelDB browser
```
Search through Minecraft Bedrock world database entries. 
```
- [ ] App window-scaling
```
Adjust the size of the app window, great for video tutorials and for people who are visually impaired.
```
- [ ] A settings menu for each app / tool
- [ ] Plug-in support
- [ ] Extension support
```
- Supporting extentions from other tools including: The Universal Minecraft Tool and Amulet
- Conversion script extensions 
- Database extensions
```
- [ ] Automatic app updater
- [ ] Discord RPC
- [ ] Multi-threading for all functions
- [ ] Built-in console resigners for save files
- [ ] Hex editor
- [ ] Keyboard shortcut support
- [ ] Undo & redo support
- [ ] Copy and paste support

Editors
- [ ] Modern NBT editor with S-NBT functionality
```
With support for showing assets depending on each NBT Tag (EX: NBT Tag = Enchanted Diamond Sword = the image next to the tag showing an Enchanted Diamond Sword + the text of the NBT tag being purple (#a84cc2).
```
- [ ] GRF editor with support for  RAW editing (S-GRF)
- [ ] World editor (like World-painter)
```
Supporting biome replacement, block replacement, etc
```
- [ ] Map editor (modify the in-game map image)
- [ ] Full player editor (inventory, armor, etc)

Converters
- [ ] World converter
```
- Customizable world conversion options
- Support for skipping partially-generated chunks
- Depth fixer
- Support for block property recalculation
- Support for lighting recalculation
- Support for heightmap recalculation
- Heightmap bypassed for the map viewer
- Output version targeting
```
- [ ] Map item converter
- [ ] Host player converter
- [ ] JSON converter
- [ ] Resource pack converter
- [ ] Texture pack converter (via PCK Studio)

Other planned features
- [ ] All MCCToolChest utilities and functionalities
- [ ] Skin maker / editor
- [ ] LCE modding tools
- [ ] Other
