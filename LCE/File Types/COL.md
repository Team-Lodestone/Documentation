# COL (colours.col)

> [!NOTE]
> COL is always Big Endian regardless of console.

### COL structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 0x04 | Version of the COL file | 
| Color count | 0x04 | Amount of colors in the color table | 
| [Color Table](#color-table) | Variable | |
| World color count | 0x04 (Only exists if Version > 0) | Amount of colors in the world color table | |
| [World Color Table](#world-color-table) | Variable (Only exists if Version > 0) | |

### Color Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Name | Variable | UTF8 string of length which is provided by the prefixed UShort
| Color | 0x04 (ARGB) | ARGB pixel format color

### World Color Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Name | Variable | UTF8 string of length which is provided by the prefixed UShort
| Water Color | 0x04 (ARGB) | ARGB pixel format color which dictates the water color
| Underwater Color | 0x04 (ARGB) | ARGB pixel format color which dictates the underwater color (not sure what this is yet)
| Fog Color | 0x04 (ARGB) | ARGB pixel format color which dictates the fog color
