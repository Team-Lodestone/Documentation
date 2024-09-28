# __**1. Header `[..0x19]`**__  
• The first two bytes represent a short containing the chunk's version in hex. So far, I only know that `12 = Aquatic`.  
• The next 8 bytes represent two integers with the chunk's X and Z position respectively.  
• The last 16 bytes are two longs containing the `LastUpdate` and `InhabitedTime` tags.  
  
```diff
   |00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
   |-----------------------------------------------
+00|00 0C 00 00 00 01 00 00 00 05 00 00 00 00 00 00
   |^^^^^ ^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^
   |Ver.  Chunk X-Pos Chunk Z-Pos LastUpdate...
+10|00 00 00 00 00 00 00 00 00 00 ?? ?? ?? ?? ?? ??
   |^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^
   |...   InhabitedTime
```  
# __**2. Section Header `[0x1A..0x4B]`**__  
> **\*** "Sections" are vertically-aligned cubes of 16×16×16 blocks (4096), and there are 16 of them in each chunk. Starting from 0 (y0) up to 15 (y255)  
  
• The first 0x2 `[0x1A..0x1B]` bytes define how large the block data is (multiply by `0x100` to get the actual size)  
• The next 0x20 bytes `[0x1C..0x3B]` contain 16 shorts defining offsets of where sections start. If an offset matches the block data length (shown above), then there should be no more sections to parse.  
• The next 0x10 bytes `[0x3C..0x4B]` are the sizes of sections. Multiply by `0x100` to get the actual size. If a size is `0`, then there's probably no more sections to parse.  
# __**3. Section Data `[0x4C..(*X+0x4C)]`**__  
## ⚠️ **WARNING:** Data may be inaccurate! ⚠️  
> **\*** X is defined in the Section Header as the "block data size" `[0x1A..0x1B]`  
> **†** Y is defined in the Section Header as the "section offset". Add `0x4C` to get the actual address in the chunk data. `[0x1C..0x3B]`  
> **‡** Z is defined in the Section Header as the "section size". `[0x3C..0x4B]`  
> **⁂** Grids are cubes of 4×4×4 blocks (64 blocks), and there are 64 of them per section (64×64=4096 blocks per section). They are stored in a 4×4×4 grid of the section.  
> **⸸** Block data is stored in 2 bytes like this: nybbles 2, 3, and 0 make up the extended block ID, and nybble 1 makes up the data value.  
> **Example:** `5F 10` - `Block ID: 0x105 (261)` + `Data Value: 0xF (15)`  
  
Each section takes up a specific amount of space (defined in the section header `[0x3C..0x4B]`. We will document just a single section for simplicity.  
  
• The first 0x80 bytes `[†Y..Y+0x7F]` is the grid`⁂` index table. Grid indicies are stored in YZX format. `gridIndex = Y† + ((gx * 16) + (gz * 4) + gy)`  
• The remaining bytes `[Y+0x80..(Y+(Z-0x80))]` define the 'palette' data, storing what blocks are used in the section.  
• Each "grid index" consist of 2 bytes. The first nybble of the second byte defines the grid's format, which defines how the blocks are stored and how many bits are stored. Nybbles `3`, `0`, and `1` build the offset of where the grid's palette is stored in the palette data. `offset = (nybble3 << 8 | nybble0 << 4 | nybble1) * 4` / `format = nybble2`  
**Example:** `9C 40` - `Format = 0x4` + `Offset = 0x270`  
• Formats are shown below:  

| Format | Palette Size | Description |
| --- | --- | --- |
| 0 | 1 (0x01) | The entire grid is filled with just one type of block. Block is stored in the grid index itself (byte 0 and byte 1 make up the block data⸸) |
| E | 128 (0x80) | The entire grid is filled with multiple kinds of blocks (up to 64). The palette for this grid is is 0x80 bytes long, storing the blocks in a YZX format.   |
| F | 256 (0x100) | Basically the exact same as format `E`, except the palette has been extended to 0x100 bytes, the last 0x80 bytes containing the "Liquid" data. This format was specifically created for the Aquatic update. |
| 2 | 12 (0x0C) | The grid contains only 2 block types. The first 2 shorts of the palette are the blocks. The last 8 bytes define bits that store the block's positions, the 1st block type being 0 and the 2nd block type being 1. The positions are stored in YZX format. **Example:** `C0 00` = `1100 0000 0000 0000` |
| 3 | 20 (0x14) | Unknown at the current time, however it never seems to show up from personal experience. |
| 4 | 24 (0x18) | The grid contains up to 4 block types. (If there are less than 4 blocks, it fills the rest of the bytes with `0xFF`) The first 4 shorts of the palette are the blocks. The last 16 bytes define bits that store the block's positions. ❖The positions are stored in YZX format. |
| 5 | 40 (0x28) | Unknown at the current time, however it never seems to show up from personal experience. |
| 6 | 40 (0x28) | The grid contains up to 8 block types. (If there are less than 8 blocks, it fills the rest of the bytes with `0xFF`) The first 8 shorts of the palette are the blocks. The last 28 bytes define bits that store the block's positions. ❖The positions are stored in YZX format. |
| 7 | 64 (0x40) | Unknown at the current time, however it never seems to show up from personal experience. |
| 8 | 64 (0x40) | The grid contains up to 16 block types. (If there are less than 16 blocks, it fills the rest of the bytes with `0xFF`) The first 16 shorts of the palette are the blocks. The last 32 bytes define bits that store the block's positions. ❖The positions are stored in YZX format. |  
  
❖ Block Positions are stored both similarly and differently per format. Here's how to get the block positions:  
Get the location bytes, and split them evenly into arrays of 8 bytes (if the locations array is 24 bytes long, split them into **3** 8-byte arrays). Then reverse the order, convert each byte into binary, then add the arrays' bits together.  
If this wording is confusing (I can't word properly lol), here's an example:  
```
locationArr: 0x77 0x73 0x77 0x77 0x77 0x73 0x77 0x73 0x00 0x04 0x00 0x04 0x00 0x04 0x00 0x04
--- split into 8-byte arrays ---
splitArr1: 0x77 0x73 0x77 0x77 0x77 0x73 0x77 0x73
splitArr2: 0x00 0x04 0x00 0x04 0x00 0x04 0x00 0x04
--- reverse the order of the arrays ---
splitArr2: 0x00 0x04 0x00 0x04 0x00 0x04 0x00 0x04
splitArr1: 0x77 0x73 0x77 0x77 0x77 0x73 0x77 0x73
--- convert to binary ---
binaryArr1: 0000000000000100000000000000010000000000000001000000000000000100
binaryArr2: 0111011101110011011101110111011101110111011100110111011101110011
--- add the bits together (not a normal OR operation, just go through each bit and add them together) ---
--- (think of it like "vertical binary", where the bottom array is 1 bit, the second to bottom is 2 bits, etc.) ---
final     : 0111011101110211011101110111031101110111011102110111011101110211
```  
# __**4. Block Light & Sky Light `[X..??]`**__  
## ⚠️ **WARNING:** Data may be inaccurate! ⚠️  
### I kind of rushed this part of the documentation so, future me, please fix this up.
> **\*** X is the block data size, as shown in the **Section Data**. Add `0x4C` to get the starting offset. `[0x1A..0x1B]`  

There are 4 different "sections" of light, the first 2 dedicated to the SkyLight, and the last 2 being the BlockLight. Since they're basically the same format, we'll cover just one section.  

• The first 0x4 bytes `[X..X+0x3]` defines the length of the light data (minus the header). Multiply by `0x80` to get the actual size. We'll refer to this size as Y for now.  
> If the length is `0x00000000`, then skip the third bullet point as no light data is actually stored, it's all defined in the header itself.  
  
• The next 0x80 bytes `[X+0x4..X+0x83]` is the light data header. Every byte is an offset pointing to where the light data should be retrieved from (each offset points to somewhere in the light data section, each taking up 0x80 bytes). Multiply the offset by `0x80` to get the actual offset in the light data. If an offset is `0x80`, then the 128 bytes should all be filled with `0x00`, and if the offset is `0x81`, all 128 bytes should be `0xFF`.  
• The rest of the bytes for the section `[X+0x84..(X+0x84)+Y]` make up the light data itself, but only if the light data length is more than **0**.  
  
# __**5. Height Map, TerrainPopulatedFlags, & Biomes `[0x??..(0x??+0x202)]`**__  
• The first 0x100 bytes store the HeightMap byte array.  
• The next 0x2 bytes store the short `TerrainPopulatedFlags`.  
• The last 0x100 bytes store the Biomes byte array.  
# __**6. Raw NBT Data `[0x??..]`**__  
• The rest of the file contains raw NBT data. You can tell where it starts by looking for the header (`0x0A 0x00 0x00`).  
