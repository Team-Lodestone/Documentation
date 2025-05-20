# LOC File

> [!NOTE]
> LOC is always Big Endian regardless of console.

### LOC structure
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 0x04 (uint) | Version of the LOC file | 
| Language Count | 0x04 (uint) | Amount of languages. | 
| [Key Table](./LOC.md#Key-Table) | 0x05 + (0x04 (uint) * Key Count)  | Only exists if version is 0x02 |
| [Language List](./LOC.md#Language-list) | Variable * Language Count | Table of all the languages |
| [Languages Table](./LOC.md#String-Table) | Variable * Language Count | Contains the actual language data | 

### Key Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Use Unique IDs | 0x01 | Sets if the LOC uses the Unique IDs | 
| Key Count | 0x04 (uint) | Amount of keys | 
| Keys | Variable | uint array consisting of the ID for each key |

### Language List
> [!NOTE]
> In the game, this is implemented as: `std::unordered_map<uint32_t, std::string>`

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Language Code | Variable | UTF8 string of length which is provided by the prefixed UShort. Contains the ISO 639-1 code for the language. |
| ID | 0x04 (uint) | ID of the language |

### Language Table
| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Unknown | 0x04 (uint) | If this is greater than 0x00, read the next (also unknown) byte |
| Unknown | 0x01 | |
| Language Code | Variable | UTF8 string of length which is provided by the prefixed UShort. Contains the ISO 639-1 code for the language. | 
| Strings Count | 0x04 (uint) | Count of all of the strings for this language |
| Strings | Variable * Strings Count | UTF8 strings of length which is provided by the prefixed UShort. One for every string. |
