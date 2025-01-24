# Options
Data comes from Minecraft: Xbox One Edition latest ver.   
Table is sorted by Enum ID

Things that aren't known are under Unknown, due to my test hook not printing that value when messing around in the options.

| Name                  | Type    | Enum ID | Offset in OPTIONSDATA | Size (in bits) | Notes                                                  |
|-----------------------|---------|---------|-----------------------|----------------|--------------------------------------------------------|
| Music Volume          | Slider  | 0x0     | 0x01                  | 8              |                                                        |
| Sound Volume          | Slider  | 0x1     | 0x02                  | 8              |                                                        |
| Gamma                 | Slider  | 0x2     | 0x04                  | 8              |                                                        |
| Difficulty            | Slider  | 0x3     | 0x06 (Bits 0-1)       | 2              |                                                        |
| Game Sensitivity      | Slider  | 0x4     | 0x03                  | 8              |                                                        |
| Interface Sensitivity | Slider  | 0x5     | 0x50                  | 8              |                                                        |
| View Bobbing          | Boolean | 0x6     | 0x06 (Bit 2)          | 1              |                                                        |
| Unknown               | Unknown | 0x7     | 0x06 (Bits 4-5)       | 2              |                                                        |
| Invert Look           | Boolean | 0x8     | 0x06 (Bit 6)          | 1              |                                                        |
| Southpaw              | Boolean | 0x9     | 0x06 (Bit 7)          | 1              |                                                        |
| Unknown               | Unknown | 0xa     | 0x54 (Bit 23)         | 1              |                                                        |
| Vertical Splitscreen  | Boolean | 0xb     | 0x06 (Bit 8)          | 1              |                                                        |
| In-Game Gamertags     | Boolean | 0xc     | 0x06 (Bit 3)          | 1              |                                                        |
| Unknown               | Unknown | 0xd     | 0x06 (Bits 11-14)     | 4              |                                                        |
| Splitscreen Gamertags | Boolean | 0xe     | 0x06 (Bit 9)          | 1              |                                                        |
| Hints                 | Boolean | 0xf     | 0x06 (Bit 10)         | 1              |                                                        |
| Interface Opacity     | Slider  | 0x10    | 0x51                  | 8              |                                                        |
| In-Game Tooltips      | Boolean | 0x11    | 0x06 (Bit 15)         | 1              |                                                        |
| Render Clouds         | Boolean | 0x12    | 0x54 (Bit 0)          | 1              |                                                        |
| Unknown               | Unknown | 0x13    | 0x54 (Bit 1)          | 1              |                                                        |
| Unknown               | Unknown | 0x14    | 0x54 (Bit 2)          | 1              |                                                        |
| Unknown               | Unknown | 0x15    | 0x54 (Bit 3)          | 1              |                                                        |
| Unknown               | Unknown | 0x16    | 0x54 (Bits 4-5)       | 2              |                                                        |
| Display Hud           | Boolean | 0x17    | 0x54 (Bit 7)          | 1              |                                                        |
| Display Hand          | Boolean | 0x18    | 0x54 (Bit 8)          | 1              |                                                        |
| Custom Skin Animation | Boolean | 0x19    | 0x54 (Bit 9)          | 1              |                                                        |
| Death Messages        | Boolean | 0x1a    | 0x54 (Bit 10)         | 1              |                                                        |
| Hud Size              | Slider  | 0x1b    | 0x54 (Bits 11-12)     | 2              |                                                        |
| Hud Size Splitscreen  | Slider  | 0x1c    | 0x54 (Bits 13-14)     | 2              |                                                        |
| Animated Character    | Boolean | 0x1d    | 0x54 (Bit 15)         | 1              |                                                        |
| Unknown               | Unknown | 0x1e    | 0x56 (Bit 0)          | 1              |                                                        |
| Unknown               | Unknown | 0x1f    | 0x54 (Bit 17)         | 1              |                                                        |
| Classic Crafting      | Boolean | 0x20    | 0x54 (Bit 18)         | 1              |                                                        |
| Cave Sounds           | Boolean | 0x21    | 0x54 (Bit 19)         | 1              |                                                        |
| Game Chat             | Boolean | 0x22    | 0x54 (Bit 20)         | 1              |                                                        |
| Minecart Sounds       | Boolean | 0x23    | 0x54 (Bit 21)         | 1              |                                                        |
| Unknown               | Unknown | 0x24    | 0x57 (Bits 0-1)       | 2              |                                                        |
| Unknown               | Unknown | 0x25    | 0x54 (Bit 27)         | 1              |                                                        |
| Display Game Messages | Boolean | 0x26    | 0x54 (Bit 28)         | 1              |                                                        |
| Display Save Icon     | Boolean | 0x27    | 0x54 (Bit 29)         | 1              | Unconfirmed (as I had excluded this print due to spam) |
| Flying View Rolling   | Boolean | 0x28    | 0x54 (Bit 30)         | 1              | REVERSE BOOLEAN (1 means disabled, 0 means enabled)    |
| Show Glide Ghost      | Boolean | 0x2a    | 0x54 (Bit 22)         | 1              |                                                        |
| Show Glide Ghost Path | Boolean | 0x2b    | 0x54 (Bit 31)         | 1              |                                                        |
| Auto Jump             | Boolean | 0x2c    | 0x54 (Bit 26)         | 1              |                                                        |
| Unknown               | Unknown | 0x2d    | 0x57 (Bits 0-3)       | 4              |                                                        |











