# **__1. Chunk Index `[0x0000..0x0FFF]`__**  
• The first 0x1000 bytes of a `.mcr` file is dedicated to 1024 (32x32) chunk indicies, despite the fact that only 27x27 chunks are used. They are in order of XZ index. Each 4 bytes represents a chunk offset like so:  
```cs
00 00 02 01
^^^^^^^^ ^^
Offset   Length
```  
• The offset and length can be multiplied by 0x1000 to get the actual values. if a chunk offset has all zeros, that means the chunk does not exist.  
• The offset points to a position in the mcr where the chunk's data is stored. The length specifies how many `0x1000` blocks the compressed chunk data takes up.  
# __**2. Chunk Timestamps `[0x1000..0x1FFF]`**__  
• The next 0x1000 bytes are supposedly (according to miku) timestamps of the chunks, for some reason. Maybe it was the timestamp of when the chunk was last edited? I'm not sure.  
# __**3. Chunk Data `[0x2000..]`**__  
• The rest of the `.mcr` file is dedicated to storing the actual chunk's data. The size of the chunk data is shown in the chunk index, multiplied by **0x1000**, so if the length is 03, **0x3000** bytes are reserved for the chunk data. Missing chunks are not stored here. You can tell where a chunk's data starts if it has the bytes `C0` or `80` at the beginning.   
  
__A chunk's data is stored like so:__  
The first 8 bytes contain the decompressed and compressed sizes of the chunk (not including the header here):  
```diff
+ C0 00 02 EB 00 00 0C 73
  ^^^^^^^^^^^ ^^^^^^^^^^^
  Compressed  Decompressed
  Size & Bits Size
```  
• The first two bits of the compressed size are two flags that define stuff like RLE compression. The first bit defines whether or not the compressed chunk data is RLE compressed, but the second bit's purpose is unknown at the moment.  
> (You can safely remove the bits from the compressed size by doing an AND operation: `0xC00002EB & 0x3FFFFFFF = 0x000002EB`)  
  
The rest of the data is the compressed chunk data (XMEM for Xbox 360, Deflate for PS3, or ZLIB for Wii U), along with RLE compression. The compressed size shows how big the data is before it ends (there may be some trailing bytes at the end, I'm not sure what those mean exactly yet).  
