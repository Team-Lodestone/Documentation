# Xbox One Save Structure
It seems that Xbox One Edition stores its files differently than the rest of the editions...

## containers.index
#### containers.index might be found in the save root (aka where all the game saves are stored for that game).
### Format
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| UWP Package Name | Any | UTF16-LE string containing the game name.
| UWP Package Family Name | Any/Unknown | Unconfirmed as I cannot find confirmation on this from the MS Store.
| "!App" | 0x08 | Might be part of the UWP Package Family Name
| Unknown | 0x10 | Unknown
| GUID | 0x48 | UTF16-LE GUID, for me it was all 0's (00000000-0000-0000-0000-000000000000)
| Entries | Any | The entries |

### Entry
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Unknown | 0x08 | Could be 2 int32s. |
| Save Name Size | 0x04 | Size of the save name chars.
| Save Name | Any | The name of the save, example: 201938538145New World (note those numbers were made up by me.)
| Unknown | 0x35 | Unknown

# Save folder structure

## `{GUID}`
Example: `{A9E8EB6A-B6F3-45B1-9F09-2A2B062DBC5F}`  

The GUIDs for each file are stored along with their true filename in the `container.#` file, check out [this for more info](#container)

The data in these files are what you would expect to see in a normal LCE Multi-region save, minus the filename.

## container.`#`
Example: `container.152`  

### Header
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Unknown | 0x04 | Unknown
| Unknown | 0x04 | Unknown


### Index
| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Filename | 0x90 | UTF16-LE string containing the file name.
| GUID | 0x10 | Little Endian GUID

# Notes
This documentation will likely change at any time.  
If you have any info or need help, contact `dexrn` on Discord.
