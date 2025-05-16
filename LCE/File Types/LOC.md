# LOC

> [!NOTE]
> LOC is always Big Endian regardless of console.

LOC files can use both numerical IDs and strings.

### LOC structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 0x04 | Version of the LOC file | 
| Language Count | 0x04 | Amount of languages. | 
| [Key Table](#key-table) | Variable | Only exists if version is 0x02 |
| [Language List](#language-list) | Variable | Table of all the languages |
| [Languages Table](#string-table) | Variable | Contains the actual language data, one for every language | 

### Key Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Use Unique IDs | 0x01 | Sets if the LOC uses the Unique IDs | 
| Key Count | 0x04 | Amount of keys | 
| Keys | Variable | UInt32 array consisting of the ID for each key |

### Language List
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Language Code | Variable | UTF8 string of length which is provided by the prefixed UShort. Contains the ISO 639-1 code for the language. |
| ID | 0x04 | ID of the language |

### Language Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Unknown | 0x04 | If this is greater than 0x00, read the next (also unknown) byte |
| Unknown | 0x01 | |
| Language code | Variable | UTF8 string of length which is provided by the prefixed UShort. Contains the ISO 639-1 code for the language. | 
