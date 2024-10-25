# Split Save Format
Not much seems to be known about split saves, so some info may be inaccurate.   

- Split saves are only used on Xbox One, PlayStation 4, and Nintendo Switch edition, although there is a symbol named useSplitSaves on Wii U Edition, which apparently does not do anything, probably due to ConsoleSaveFileSplit not existing on the other editions. 
- When split saves are used, regions are not saved in the save file, instead outside in their own seperate files, which use a [specific name format](#name).
- Additionally, split saves are just region files that are compressed with special RLE, it seems.

### Name

`GAMEDATA_DDDDXXZZ`
- `DDDD`: An int representing the dimension (in decimal):
  - `0000` for the Overworld
  - `0001` for the Nether
  - `0002` for the End
- `XXZZ`: 2 shorts representing the X and Z coordinates of the region (in hexadecimal).


Thanks to [UtterEvergreen1](https://github.com/UtterEvergreen1) for helping out and explaining this.

### Format
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Decompressed Size | 0x04 (uint) | |
| Compressed Region | Variable | Compressed with what seems to be a special RLE that is only used for split saves. |
