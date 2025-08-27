### Save Versions
|     TU(s)      | Minimum Version | Current Version |
|:--------------:|:---------------:|:---------------:|
|   0033-0035    |        0        |        1        |
|    0054-TU4    |        0        |        2        |
|    TU5-TU8     |        0        |        3        |
|    TU9-TU13    |        5        |        5        |
|   TU14-TU16    |        6        |        6        |
|   TU17-TU18    |        8        |        8        |
|   TU19-TU35    |        9        |        9        |
|   TU36-TU68    |       10        |       10        |
| TU69-1.95(PS4) |       11        |       11        |

### Notes
|   TU(s)    | Notes                                                                                                               |
|:----------:|---------------------------------------------------------------------------------------------------------------------|
| 0033-0035  | This format differs from the one we see today, it has been documented [here](./Pre-Release%20Save%20Format.md)      |
|    0054    | First version to have the same savegame format used in the latest version (as of the writing of this documentation) |
|    TU9     | First version to have a "minimum version" that isn't 0, as well as skipping a number. (3-->5)                       |
|    TU17    | Skips a number. (6-->8)                                                                                             |
|    TU54    | Can no longer load version 1 saves, instead it generates a new world.                                               |

> [!NOTE]
> These tests were performed with an emulator, with one world generated per version, versions were sourced from Omniarchive, due to me using Codex-IPSA for this.

> [!CAUTION]
> I could not get worlds to generate on TU34, not sure if it's a Xenia issue or something else.   
> I think it's probably due to [MCCE-533](https://web.archive.org/web/20201028140233/https://bugs.mojang.com/browse/MCCE-533)
