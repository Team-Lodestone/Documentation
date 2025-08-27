# Options
Data comes from Minecraft: Xbox One Edition latest ver.   
Tables are sorted by ID   

Note: This applies only for Options file version 33.

### Table of contents

1. [Settings](#settings) - Game Settings
3. [Skins](#skins) - Chosen skins and favorite skins
2. [Actions](#actions-controller-bindings) - Game Controls
   - [Buttons](#buttons) - Controller button IDs
3. [Extra](#extra) - Extra notes and technical stuff

## Settings
Things that aren't known are under Unknown, due to my test hook not printing that value when messing around in the options.

| Name                  | Type    | Enum ID | Offset in OPTIONSDATA | Size (in bits) | Default Value | Notes                                                                      |
|-----------------------|---------|---------|-----------------------|----------------|---------------|----------------------------------------------------------------------------|
| Music Volume          | Slider  | 0x0     | 0x01                  | 8              | 100%          |                                                                            |
| Sound Volume          | Slider  | 0x1     | 0x02                  | 8              | 100%          |                                                                            |
| Gamma                 | Slider  | 0x2     | 0x04                  | 8              | 50%           |                                                                            |
| Difficulty            | Slider  | 0x3     | 0x06 (Bits 0-1)       | 2              | 1 (Easy)      |                                                                            |
| Game Sensitivity      | Slider  | 0x4     | 0x03                  | 8              | 100%          |                                                                            |
| Interface Sensitivity | Slider  | 0x5     | 0x50                  | 8              | 100%          |                                                                            |
| View Bobbing          | Boolean | 0x6     | 0x06 (Bit 2)          | 1              | True          |                                                                            |
| Unknown               | Unknown | 0x7     | 0x06 (Bits 4-5)       | 2              | Unknown       | See [0x07 and 0x0A](#_0x07-and-0x0a). Also used under UIComponent_Tooltips |
| Invert Look           | Boolean | 0x8     | 0x06 (Bit 6)          | 1              | False         |                                                                            |
| Southpaw              | Boolean | 0x9     | 0x06 (Bit 7)          | 1              | False         |                                                                            |
| Unknown               | Unknown | 0xa     | 0x54 (Bit 23)         | 1              | Unknown       | See [0x07 and 0x0A](#_0x07-and-0x0a).                                      |
| Vertical Splitscreen  | Boolean | 0xb     | 0x06 (Bit 8)          | 1              | False         |                                                                            |
| In-Game Gamertags     | Boolean | 0xc     | 0x06 (Bit 3)          | 1              | True          |                                                                            |
| Autosave Timer        | Slider  | 0xd     | 0x06 (Bits 11-14)     | 4              | Unknown       | Haven't confirmed in-game, instead via reading code.                       |
| Splitscreen Gamertags | Boolean | 0xe     | 0x06 (Bit 9)          | 1              | True          |                                                                            |
| Hints                 | Boolean | 0xf     | 0x06 (Bit 10)         | 1              | True          |                                                                            |
| Interface Opacity     | Slider  | 0x10    | 0x51                  | 8              | 80%           |                                                                            |
| In-Game Tooltips      | Boolean | 0x11    | 0x06 (Bit 15)         | 1              | True          |                                                                            |
| Render Clouds         | Boolean | 0x12    | 0x54 (Bit 0)          | 1              | True          |                                                                            |
| Unknown               | Unknown | 0x13    | 0x54 (Bit 1)          | 1              | Unknown       |                                                                            |
| Unknown               | Unknown | 0x14    | 0x54 (Bit 2)          | 1              | Unknown       |                                                                            |
| Unknown               | Unknown | 0x15    | 0x54 (Bit 3)          | 1              | Unknown       |                                                                            |
| Unknown               | Unknown | 0x16    | 0x54 (Bits 4-5)       | 2              | Unknown       | See [0x16 and 0x25](#_0x16-and-0x25).                                      |
| Display Hud           | Boolean | 0x17    | 0x54 (Bit 7)          | 1              | True          |                                                                            |
| Display Hand          | Boolean | 0x18    | 0x54 (Bit 8)          | 1              | True          |                                                                            |
| Custom Skin Animation | Boolean | 0x19    | 0x54 (Bit 9)          | 1              | True          |                                                                            |
| Death Messages        | Boolean | 0x1a    | 0x54 (Bit 10)         | 1              | True          |                                                                            |
| Hud Size              | Slider  | 0x1b    | 0x54 (Bits 11-12)     | 2              | 2             |                                                                            |
| Hud Size Splitscreen  | Slider  | 0x1c    | 0x54 (Bits 13-14)     | 2              | 3             |                                                                            |
| Animated Character    | Boolean | 0x1d    | 0x54 (Bit 15)         | 1              | True          |                                                                            |
| Unknown               | Unknown | 0x1e    | 0x56 (Bit 0)          | 1              | Unknown       |                                                                            |
| Unknown               | Unknown | 0x1f    | 0x54 (Bit 17)         | 1              | Unknown       |                                                                            |
| Classic Crafting      | Boolean | 0x20    | 0x54 (Bit 18)         | 1              | False         |                                                                            |
| Cave Sounds           | Boolean | 0x21    | 0x54 (Bit 19)         | 1              | True          |                                                                            |
| Game Chat             | Boolean | 0x22    | 0x54 (Bit 20)         | 1              | False         |                                                                            |
| Minecart Sounds       | Boolean | 0x23    | 0x54 (Bit 21)         | 1              | True          |                                                                            |
| Unknown               | Unknown | 0x24    | 0x57 (Bits 0-1)       | 2              | Unknown       |                                                                            |
| Unknown               | Boolean | 0x25    | 0x54 (Bit 27)         | 1              | Unknown       | See [0x16 and 0x25](#_0x16-and-0x25).                                      |
| Display Game Messages | Boolean | 0x26    | 0x54 (Bit 28)         | 1              | True          |                                                                            |
| Display Save Icon     | Boolean | 0x27    | 0x54 (Bit 29)         | 1              | True          | Unconfirmed (as I had excluded this print due to spam)                     |
| Flying View Rolling   | Boolean | 0x28    | 0x54 (Bit 30)         | 1              | True          | REVERSE BOOLEAN (1 means disabled, 0 means enabled)                        |
| Show Glide Ghost      | Boolean | 0x2a    | 0x54 (Bit 22)         | 1              | True          |                                                                            |
| Show Glide Ghost Path | Boolean | 0x2b    | 0x54 (Bit 31)         | 1              | True          |                                                                            |
| Auto Jump             | Boolean | 0x2c    | 0x54 (Bit 26)         | 1              | False         |                                                                            |
| Unknown               | Unknown | 0x2d    | 0x57 (Bits 0-3)       | 4              | Unknown       | Not referenced anywhere else?????                                          |

## Skins
Skins are stored using their 4 byte ID.

The player's chosen skin is stored at offset `0x4c`.  
There's also a thing for a Player Cape at offset `0x5c`, I assume this is only set when the chosen skin has a cape.  

Favorite skins are stored at offset `0x60`, 4 bytes for each skin, with a maximum of 10 favorite skins allowed (0x60-0x87)

### Skin IDs
TODO

## Actions (Controller bindings)
| Name                  | ID | Offset in OPTIONSDATA | Default bind |
|-----------------------|----|-----------------------|--------------|
| Jump                  | 0  | 0xA4                  | A            |
| Use                   | 1  | 0xA5                  | LT           |
| Action                | 2  | 0xA6                  | RT           |
| Cycle Held Item Left  | 3  | 0xA7                  | LB           |
| Cycle Held Item Right | 4  | 0xA8                  | RB           |
| Inventory             | 5  | 0xA9                  | Y            |
| Drop                  | 6  | 0xAA                  | B            |
| Sneak/Dismount        | 7  | 0xAB                  | RS           |
| Crafting              | 8  | 0xAC                  | X            |
| Change Camera Mode    | 9  | 0xAD                  | LS           |
| Fly Left              | 10 | 0xAE                  | D-Pad Left   |
| Fly Right             | 11 | 0xAF                  | D-Pad Right  |
| Fly Up                | 12 | 0xB0                  | D-Pad Up     |
| Fly Down              | 13 | 0xB1                  | D-Pad Down   |
| Sprint                | 14 | 0xB2                  | NONE         |
| Pick Block            | 15 | 0xB3                  | NONE         |
| Previous Player       | 16 | 0xB4                  | LB           |
| Next Player           | 17 | 0xB5                  | RB           |
| Spectate Noise        | 18 | 0xB6                  | RT           |
| Cancel Spectating     | 19 | 0xB7                  | B            |
| Confirm Ready         | 20 | 0xB8                  | X            |
| Vote                  | 21 | 0xB9                  | B            |
| Restart Section       | 22 | 0xBA                  | X            |
| Restart Race          | 23 | 0xBB                  | B            |
| Look Behind           | 24 | 0xBC                  | Y            |

### Buttons
| Name        | ID   | 
|-------------|------|
| NONE        | 0x00 |
| A           | 0x01 |
| B           | 0x02 |
| X           | 0x03 |
| Y           | 0x04 |
| D-Pad Left  | 0x05 |
| D-Pad Right | 0x06 |
| D-Pad Up    | 0x07 |
| D-Pad Down  | 0x08 |
| RB          | 0x09 |
| LB          | 0x0A |
| RT          | 0x0B |
| LT          | 0x0C |
| RS          | 0x0D |
| LS          | 0x0E |

## Extra
### 0x07 and 0x0A
Setting 0x07 and 0x0A are both checked for and set in ActionGameSettings, which leads me to assume it's related to tutorial and normal in-game tooltips (due to 0x07 being used under UIComponent_Tooltips).

Here's some code (cleaned up by me) found under GameSettings::ActionGameSettings (in Wii U edition)
```CPP
    // get the value of both settings
    setting7 = GetGameSettings(param_1,0x07);
    setting10 = GetGameSettings(param_1,0xa);
    if ((0 < setting7) || (setting10 != 0)) {
      // Not sure what this does yet.
      UpdateActionMapping(param_1,setting7,setting10 != 0);
      SetGameSettings(param_1,0x07,0); // Sets 0x07 to 0
      SetGameSettings(param_1,0xa,0); // Sets 0x0A to 0
    }
```

### 0x16 and 0x25
0x16 is checked to decide whether to show the new update screen ("You may not have noticed, but your Minecraft has just been updated")   

The new update message shows if the value returned by 0x16 is not 0, and is set along with 0x25 when the button on the update message is pressed.

Here's some code (cleaned up by me) found under ConsoleUIController::NavigateToScene, this is what checks 0x16 (in Wii U edition)
```CPP
  // DAT_10483330 seems to be some bool for if the update screen was seen before?

  // if sceneId is the ID for the create/join world screen and DAT_10483330 is 0
  if ((sceneId == 0x1b) && (DAT_10483330 == '\0')) {
    // run something? Return value seems to be used in GetGameSettings for the offset
    // should be 0 otherwise it wouldn't really be getting setting 0x16. 
    settingsOffset = (**(code **)(*DAT_105600b0 + 0xe4))();
    // get setting 0x16
    setting0x16 = GameSettings::GetGameSettings(settingsOffset,0x16);
    // if it's not 0, set the ID to the new update screen (which will show it instead of the world screen)
    if (setting0x16 != 0) {
      sceneId = 0x2d; // new update screen id
      // set that DAT to 1
      DAT_10483330 = '\x01';
    }
  }
```

And some more under UIScene_NewUpdateMessage::handleInput, which is what sets 0x25 and 0x16
```cpp
        // get setting 0x16
        setting0x16 = GameSettings::GetGameSettings(*(int *)(param_1 + 0xa4),0x16);
        // if it's bigger than 0
        if (0 < (int)setting0x16) {
          // subtract 1
          setting0x16--; // originally setting0x16 - 1
        }
        // set 0x16 to 0x16's new value anded by 0xff
        GameSettings::SetGameSettings(*(int *)(param_1 + 0xa4),0x16,setting0x16 & 0xff);
        // set 0x25 to 1
        GameSettings::SetGameSettings(*(int *)(param_1 + 0xa4),0x25,1);
        // I believe this saves settings?
        GameSettings::CheckGameSettingsChanged(true,*(int *)(param_1 + 0xa4));
        // Navigate back (Not sure how this works exactly)
        // 0x52 makes it check a UIScene* var, and returns if the value is nullptr (0x52 actually causes it to fall into the default value of the switch statement according to the pcode)
        // Once that happens it runs some more confusing code that I cannot decipher myself.
        ConsoleUIController::NavigateBack
          (ConsoleUIController::instance,*(int *)(param_1 + 0xa4),false,0x52,8);
```










