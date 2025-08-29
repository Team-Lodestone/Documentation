# UTF 

A Length-prefixed UTF-16 string.

### Structure
| Name   | Type/Size     | Notes      |
|--------|---------------|------------|
| Size   | short (0x02)  |            |
| String | wchar_t[size] | Big Endian |