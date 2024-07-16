# CombinedAudio-Docs
Documentation for Minecraft 3DS' CombinedAudio.bin and Audio File Format(s).

# FSB5 Audio Wrapper Information:
## Pre-Determined Stuff:
```
The Basics:
Audio Format       | GCADPCM/DSPADPCM (Both Formats are the Same *Can be PCM-8Bit for Music).
Audio-Type         | Flat - Unoptimized Size and Sample-Rate (Can be Interleaved if Specified).
```
## Header/Wrapper Size/Length:
```
Byte 0x01    | File Version
Byte 0x10    | Name Table Size
If the Read-Byte (32-Bit Little Endian) 0x01 is equal to the Integer Value of 1, then the Header-Size is Equal to the Hex Value of 0x3C (Int: 60).
If the Read-Byte (32-Bit Little Endian) 0x01 is equal to the Integer Value of 0, then the header-Size is Equal to the Hex Value of 0x40 (Int: 64).

HeaderSize/WrapperSize = Value(Byte 0x01) + Value(Byte 0x10).
```
## General Wrapper/Header Information:
```
Byte 0x08    | Number of Songs/Tracks
Byte 0x0C    | Song Header Size.
Byte 0x14    | Song Data Size/Length
Byte 0x18    | Codec Used
Byte 0x20    | Flat or Interleaved
```
## CombinedAudio (File):
```
It's every Sound/Amiance/SFX in-game which is all Just put into a huge file in a somewhat random order.
You can use CATool (CombinedAudioTool) to directly modify/extract "Minecraft New Nintendo 3DS Edition"'s Audio.
```
