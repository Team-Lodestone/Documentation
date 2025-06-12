# Project Lodestone - Documentation
![GitHub stars](https://img.shields.io/github/stars/Team-Lodestone/Documentation?style=social)
![GitHub forks](https://img.shields.io/github/forks/Team-Lodestone/Documentation?style=social)
![GitHub contributors](https://img.shields.io/github/contributors/Team-Lodestone/Documentation)
[![Lodestone Discord](https://img.shields.io/discord/1029594598084968530?color=7a60fc&label=Project%20Lodestone%20Discord&logo=Discord&logoColor=white)](https://discord.gg/eHdmrW7W6u)

In this repo, you'll find documentation on various mechanics and file types for many versions and editions of the game.

# What is Project Lodestone?

> [!NOTE]
> This project is still in development!

**Project Lodestone** is a toolset that aims to edit and convert Minecraft worlds across various editions, including Java Edition, Bedrock Edition, all Console Editions, support for both current and legacy versions. Essentially a mega tool.

> [!NOTE]
> Support for community-made converters/readers will be looked at, but is not the main focus at this time.

[Join us on Discord!](https://discord.gg/umHRdX6R7V)

[View libLCE, a helper project that aims to implement LCE file support in C++](https://github.com/DexrnZacAttack/libLCE)

## Project Roadmap

We're continuously working on new features and improvements. Here's an outline of what we have planned:

### **Save Editor**
  - [ ] Legacy Console Edition
    - [ ] Support all editions 
        - [ ] Xbox 360 Edition
          - [ ] Loading
          - [ ] Exporting
        - [X] Xbox One Edition
          - [X] Loading
          - [ ] Exporting
        - [ ] PlayStation 3 Edition
          - [ ] Loading
          - [ ] Exporting
        - [X] PlayStation 4 Edition
          - [X] Loading
          - [ ] Exporting
        - [X] PlayStation Vita Edition 
          - [X] Loading
          - [ ] Exporting
        - [X] Wii U Edition
          - [X] Loading
          - [ ] Exporting
        - [X] Nintendo Switch Edition
          - [X] Loading
          - [ ] Exporting
    - [ ] Edit Player Data
    - [ ] Edit Region & Chunk Data
    - [ ] Edit Level Data
  - [ ] Java Edition
    - [ ] Edit Player Data
    - [ ] Edit Region & Chunk Data
    - [ ] Edit Level Data
  - [ ] Bedrock Edition
    - [ ] Edit Player Data
    - [ ] Edit Region & Chunk Data
    - [ ] Edit Level Data
  - [ ] 3DS Edition
     - [ ] Edit Player Data
     - [ ] Edit Chunk Data
     - [ ] Edit Level Data
  - [ ] Pi Edition
    - [ ] Edit Player Data
    - [ ] Edit Chunk Data
    - [ ] Edit Level Data

### **World Converter**
  - [ ] Support all editions/versions
    - [ ] Java Edition
      - [ ] Classic/Pre-Classic
        - [X] rd-132211 - c0.0.12a_03
          - NOTE: Not yet available in the App.
        - [X] c0.0.13a - c0.0.13a_03
          - NOTE: Not yet available in the App. 
        - [ ] c0.0.14a - c0.30
      - [X] Indev <!-- figure out which versions can be saved locally (using BetaCraft) -->
        - NOTE: Not yet available in the App.
      - [ ] Infdev 624
      - [X] Alpha Save Format (Infdev 327 - Beta 1.2_02)
        - NOTE: Not yet available in the App.
      - [X] McRegion (Beta 1.3 - Release 1.1)
        - NOTE: Not yet available in the App. 
      - [X] Anvil (Release 1.2 - 1.13)
        - NOTE: Not yet available in the App.
      - [ ] Anvil (Release 1.13 - present)
    - [ ] Bedrock Edition
    - [ ] Legacy Console Edition
      - [ ] Support all chunk versions
    - [ ] 3DS Edition
    - [ ] Pi Edition
    - [ ] Classic-JS
  - [ ] Advanced conversion options
    - [ ] Depth fixing
    - [ ] Lighting recalculation
    - [ ] Mixed output chunk versioning

### **File Format Editor**
  - [ ] NBT
  - [ ] S-NBT
  - [ ] MCR/MCA
  - [ ] [GRF](#grf-editor)
  - [ ] MCS
  - [ ] [ARC](LCE/File%20Types/ARC)
  - [ ] LOC
  - [ ] PCK
  - [ ] [COL](LCE/File%20Types/COL)
  - [ ] FUI
  - [ ] CDB
  - [ ] VDB

### **World Editor**
  - [ ] Biome Editor
  - [ ] Entity/Block Entity Editor

### **Extra tools**
  - [ ] Hex Editor
  - [ ] LevelDB Browser
  - [ ] Datapack Editor
  - [ ] Map Item Editor
  - [ ] Resource/Texture Pack Converter

### **Web App**
  - [X] App UI planned out
  - [ ] App completed
    - [ ] [Save Editor](#save-editor) 
    - [ ] [World Converter](#world-converter)
    - [ ] [File Format Editor](#file-format-editor)
    - [ ] [World Editor](#world-editor)
    - [ ] [Extra Tool](#extra-tools)
    
### [**Localization**](Team.md#translations)
  - [ ] Main site
    - [ ] Arabic
    - [ ] Central Kurdish
    - [X] French (Canada)
    - [X] Japanese
    - [ ] Northern Kurdish
  - [ ] Lodestone App
    - [ ] Arabic
    - [ ] Central Kurdish
    - [ ] French (Canada)
    - [ ] Japanese
    - [ ] Northern Kurdish

Stay tuned as we make progress on each part of Lodestone. If you're interested in contributing, we welcome your input!

## Supported Editions and Versions

Note: A lot of this is what to be expected, not already finished.
Check the [World Converter section](#world-converter) to see what has been done.

| Edition                   | Supported Versions |
|---------------------------|--------------------|
| Java Edition              | rd-132211 - 1.21   |
| Bedrock Edition           | 0.1.0 - 1.21       |
| Raspberry Pi Edition      | 0.1.0 - 0.1.1      |
| Xbox 360 Edition          | TU0 - TU75         |
| PlayStation 3 Edition     | 1.00 - 1.84        |
| Xbox One Edition          | CU1 - CU59         |
| PlayStation 4 Edition     | 1.00 - 1.95        |
| PlayStation Vita Edition  | 1.00 - 1.84        |
| Wii U Edition             | Patch 1 - Patch 43 |
| 3DS Edition               | 0.1.0 - 1.9.19     |
| Switch Edition            | 1.0.1 - 1.0.17     |
| Classic Javascript Remake | 0.0.23a_01         |

## Contribute to the Project

Want to help shape Project Lodestone? Here's how you can get involved:

- **Submit a Pull Request**: Whether it's bug fixes, new features, or improvements, your contributions are welcome.
- **Join Our Discord**: Connect with the community, discuss ideas, and get help on our [Discord server](https://discord.gg/umHRdX6R7V).
- **Spread the Word**: Star the repository, share it with others, and help grow our community!

Thank you to all the contributors who make this project possible!

### App
<a href="https://github.com/Team-Lodestone/App/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Team-Lodestone/App" />
</a>

### Main Site
<a href="https://github.com/Team-Lodestone/team-lodestone.github.io/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Team-Lodestone/team-lodestone.github.io" />
</a>

### Documentation
<a href="https://github.com/Team-Lodestone/Documentation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Team-Lodestone/Documentation" />
</a>

### UI Library
<a href="https://github.com/Team-Lodestone/UI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Team-Lodestone/UI" />
</a>

### [See the team](/Team.md)

## License & Attribution
The documentation in this project is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) unless otherwise noted.
The `.vitepress` folder is licensed under LGPL-3.0.

For more details, see the [`NOTICE`](NOTICE.md) file.
