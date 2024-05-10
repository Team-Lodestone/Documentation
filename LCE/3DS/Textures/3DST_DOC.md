# Textures:
### Prerequisites:
```
.3DST Skins/Textures are 1 of 4 Formats (Raw RGBA, Raw ABGR, Compressed ABGR, or Raw ARGB).

** Note: A texture will always be read as the format it was originally in.
         Meaning that an Image saved as Raw ABGR cannot be replaced with a Raw RGBA Image.

- Textures follow either the ETC2 or ETC1 specification
- Cubes are 2x2 pixels (4 in a square array).
- Blocks are 2x2 Blocks (2 cubes in a square array), and are 0xFF Bytes Long.
- Pixels fill Cubes from 'Left --> Right', once the 2px Line has been filled, it skips to the Next Line Down.
- Cubes fill Blocks from 'Left --> Right', once the 2 Cube Line has been filled, it skips to the Next Line Down.
- After Cubes reach a 2x2 grid (8px*8px), it moves from 'Left --> Right', once it reaches the end of the Right-Side, it skips to the next Block.
```
### Header Info:
```
Header Extends out too 0x20 (32 ByteArray) Bytes.

** Texture Name:
 - The texture name is always '3DST' in ASCII Characters.
 - In the Header, this is the first 4-Bytes (Offset 0x00 - 0x03).

** Texture Version:
 - The version scheme is exactly what you think it is (Version of the File)
 - In the Header, this is the next 4-Bytes (Offset 0x04 - 0x07).

** Texture Dimensions:
 - Defines the Width and Height of the Texture.
 - In the Header, the Width is located at the 4-Bytes at (Offset 0x0C - 0x0F).
 - In the Header, the Height is located at the 4-Bytes at (Offset 0x10 - 0x13).
 - These Variables have Checksums, which also need to be changed!
   ** Offsets (Width: 0x14 - 0x17) and (Height: 0x18 - 0x0B)

** MIP Value
 - MIP Value is the Quality Relative to the Texture, and Cannot be changed.
 - In the Header, the MIP Value is located at the Ending 4-Bytes at (Offset 0x1C - 0x1F).
```
### Data Structure:
```
Read the "Prerequisites" First!

- Pixels with no Color (Alpha Value is 0x00).
- Pixels with Color (Alpha Value is > 0x00).

** Alpha, Blue, Green, Red
> Example (ABGR):      A  B  G  R  - Colors
                       FF 03 4F 93
                       ^ Indicator (Alpha Value)

** Alpha, Red, Green, Blue
> Example (ARGB):      A  R  G  B  - Colors
                       FF 1E AD D4
                       ^ Indicator (Alpha Value)

** Red, Green, Blue, Alpha
> Example (RGBA):      R  G  B  A  - Colors
                       00 F2 A9 FF
                                ^ Indicator (Alpha Value)
```