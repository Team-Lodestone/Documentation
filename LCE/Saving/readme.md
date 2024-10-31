# LCE Saving

Saves in LCE are stored in a file under a [few different names](#save-file-names), such as `savegame.dat`, depending on the console. The save file contents are similar to the world folder in Java Edition, with a few minor differences.   
They are also [compressed with different compression methods depending on the console](../Basic%20Info.md#lce-compression).   

If you're on a newer-gen console, specifically PS4, Xbox One, and Nintendo Switch, the [Region](../Level/RegionFile.md) files are saved in seperate files *outside* of the main save file, known as a [split save](./Split%20Saves.md).

### Table of contents
1. [Save Format](./Save%20Format.md)
2. [Pre-release Save Format](./Pre-Release%20Save%20Format.md) - Versions 0033 and 0035
3. [Save File Versions](./LCE%20Save%20File%20Versions.md) - The version part of the save file header in each Xbox 360 Edition TU
4. [Split Saves](./Split%20Saves.md)
Check out the Menu/Sidebar for other stuff not mentioned here.

### Save file names
| Console | Name | Example (if needed) |
|------|----|------|
| Xbox 360 (dat) | `savegame.dat` | |
| Xbox 360 (bin) | `Save{YYYY-MM-DD-HH-MM-SS}.bin` | `Save20230524072953.bin` |
| PS3 | `GAMEDATA` | |
| PS Vita | `GAMEDATA.bin` | |
| Wii U | `{numbers}` | `221122091644` |
| Xbox One | `GAMEDATA` | |
| PS4 | `GAMEDATA` | |
| Nintendo Switch | `{numbers}.dat` | `240408080958.dat` |