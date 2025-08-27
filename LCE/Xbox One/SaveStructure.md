# Xbox One Save Structure
It seems that Xbox One Edition stores its files differently than the rest of the editions...  
Most of this documentation is actually about the container format.  
This took like an hour to make hahah  
  
Note that I use the word UWP even though XB1 LCE isn't UWP, as iirc MS Store does use stuff like app ids  
and inside the Microsoft docs some stuff is referenced as UWP.

## containers.index
#### containers.index might be found in the save root (aka where all the game saves are stored for that game).
### Format
|          Name           | Size (in bytes) |                                 Description                                 |
|:-----------------------:|:---------------:|:---------------------------------------------------------------------------:|
|         Unknown         |      0x04       |                                   Unknown                                   |
|         Unknown         |      0x04       |                                   Unknown                                   |
|    UPM String Length    |      0x04       |                    Char Length of the UWP Package Name.                     |
|    UWP Package Name     |    Any/0x1B     |                  UTF16-LE string containing the game name.                  |
|   UPFM String Length    |      0x04       |                 Char length of the UWP Package Family Name.                 |
| UWP Package Family Name |   Any/Unknown   |    Unconfirmed as I cannot find confirmation on this from the MS Store.     |
|         Unknown         |      0x0C       |                                   Unknown                                   |
|   GUID String Length    |      0x04       |                          Length of the GUID chars.                          |
|          GUID           |      0x48       | UTF16-LE GUID, for me it was all 0's (00000000-0000-0000-0000-000000000000) |
|    [Entries](#entry)    |       Any       |                                 The entries                                 |

### Entry
|      Name      | Size (in bytes) |                                          Description                                          |
|:--------------:|:---------------:|:---------------------------------------------------------------------------------------------:|
|    Unknown     |      0x04       |                                            Unknown                                            |
|    Unknown     |      0x04       |                                            Unknown                                            |
| Save Name Size |      0x04       |                                 Size of the save name chars.                                  |
|   Save Name    |       Any       | The name of the save, example: 201938538145New World (note those numbers were made up by me.) |
|    Unknown     |      0x35       |                                            Unknown                                            |

# Save folder structure

## `{GUID}`
Example: `{A9E8EB6A-B6F3-45B1-9F09-2A2B062DBC5F}`  

The GUIDs for each file are stored along with their true filename in the `container.#` file, check out [this for more info](#container)

The data in these files are what you would expect to see in a normal LCE Multi-region save, minus the filename.

## container.`#`
Example: `container.152`  

### Header
|  Name   | Size (in bytes) | Description |
|:-------:|:---------------:|:-----------:|
| Unknown |      0x04       |   Unknown   |
| Unknown |      0x04       |   Unknown   |

### Index
|     Name      | Size (in bytes) |                              Description                               |
|:-------------:|:---------------:|:----------------------------------------------------------------------:|
|   Filename    |      0x90       |               UTF16-LE string containing the file name.                |
| Filename GUID |      0x10       | Little Endian GUID that reflects one of the files inside the container |

# Notes
This documentation will likely change at any time.  
If you have any info or need help, contact `dexrn` on Discord.
