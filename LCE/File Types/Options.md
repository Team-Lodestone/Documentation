# Options File
> [!NOTE]
> The options file usually uses bitfields to store multiple options in one byte.   
> Many are unknown or flat out incorrect as I (DexrnZacAttack) just changed settings and watched the file data to see what changed. 

### Options File structure (as of latest Wii U Edition version)
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Unknown | 0x03 | |
| Music Volume | 0x01 | How loud the music is in-game |
| Sound Volume | 0x01 | How loud the sounds are in-game |
| Game Sensitivity | 0x01 | How sensitive the joystick is when looking around |
| Gamma | 0x01 | Brightness |
| Unknown | 0x01 | |
| [Bitfield 1](#settings-bitfield-1) | 0x02 | |
| Unknown | 0x46 | |
| Selected Skin Pack | 0x01 | Which skin pack is currently in use | 
| Selected Skin | 0x01 | Which skin is currently in use from the selected skin pack | 
| Interface Sensitivity | 0x01 | How sensitive the joystick is when moving the cursor around in menus |
| Interface Opacity | 0x01 | |
| Unknown | 0x02 | |
| [Bitfield 2](#settings-bitfield-2) | 0x01 | |
| [Bitfield 3](#settings-bitfield-3) | 0x01 | |
| [Bitfield 4](#settings-bitfield-4) | 0x01 | |
| Bitfield 5 | 0x01 | Not known what these corrospond to yet |
| Unknown | 0x38 | |
| Language | 0x02 | Language of the game, seems to be a bitfield, not sure though |
| Unknown | 0x12 | |
| [Controls](#controls) | 0x19 | Controller bindings |

### Settings Bitfield 1
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| Vertical Splitscreen | 0x01 | Changes splitscreen to span vertically instead of horizontally |
| Splitscreen Nicknames | 0x01 | |
| Hints | 0x01 | Show item hints when you get new items (I think?) |
| Autosave Interval | 0x04 | How long to wait before automatically saving the game |
| Unknown | 0x01 | |
| South Paw | 0x01 | Left-handed controller bindings |
| Invert Look | 0x01 | |
| Unknown | 0x03 | |
| View Bobbing | 0x01 | |
| Difficulty | 0x01 | Not sure, todo: double check |

### Settings Bitfield 2
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| Unknown | 0x02 | |
| Auto Jump | 0x01 | Whether or not to automatically jump when walking into a block |
| Unknown | 0x01 | |
| Display Game Messages | 0x01 |  |
| Display Save Icon | 0x01 | Show save indicator when saving |
| Elytra Rolling | 0x01 | Whether or not to roll the camera when turning while flying with an Elytra |
| Glide Ghost Path | 0x01 | Whether or not to show the glide ghost's path when playing solo Glide |

### Settings Bitfield 3
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| Show Hand | 0x01 | |
| Custom Skin Animation | 0x01 |  |
| Show Death Messages | 0x01 | Enable/Disable messages on death |
| Hud Size | 0x02 | Size of the HUD |
| Animated Character | 0x01 | (weird, sounds like it would collide with Custom Skin Animation? TODO: Double check) |

### Settings Bitfield 4
| Name | Size (in bits) | Description |
| :-:|:-:|:-:|
| Unknown | 0x02 | |
| Classic Crafting | 0x01 | Use java-style crafting instead of default crafting menu |
| Cave Sounds | 0x01 | Enable/Disable cave sounds |
| Game Chat | 0x01 | Enable/Disable game chat |
| Minecart Sounds | 0x01 | |
| Glide Ghost | 0x01 | Whether or not to show the glide ghost's when playing solo Glide |
| Unknown | 0x01 | |

### Controls
| Name | Size (in bytes) | Default binding (Wii U) |
| :-:|:-:|:-:|
| Jump | 0x01 | A (0x02) |
| Use | 0x01 | Left Trigger (0x0C) |
| Action | 0x01 | Right Trigger (0x0B) |
| Cycle Left | 0x01 | Left Bumper (0x0A) |
| Cycle Right | 0x01 | Right Bumper (0x09) |
| Inventory | 0x01 | X (0x04) |
| Drop | 0x01 | B (0x01) |
| Sneak | 0x01 | Right Joystick (0x0D) |
| Crafting | 0x01 | Y (0x03) |
| Switch Perspective | 0x01 | Left Joystick (0x0E) |
| Fly Left | 0x01 | DPad Left (0x05) |
| Fly Right | 0x01 | DPad Right (0x06) |
| Fly Up | 0x01 | DPad Up (0x07) |
| Fly Down | 0x01 | DPad Down (0x08) |
| Sprint | 0x01 | Unbound (0x00) |
| Pick Block | 0x01 | Unbound (0x00) |
| Spectate Previous Player | 0x01 | Left Bumper (0x0A) |
| Spectate Next Player | 0x01 | Right Bumper (0x09) |
| Spectator Taunt | 0x01 | Right Trigger (0x0B) |
| Cancel Spectating | 0x01 | B (0x01) |
| Confirm Ready | 0x01 | Y (0x03) |
| Map Vote | 0x01 | B (0x01) |
| Glide Restart Section | 0x01 | Y (0x03) |
| Glide Restart Race | 0x01 | B (0x01) |
| Glide Look Behind | 0x01 | X (0x04) |
