# Split Save Format
Not much seems to be known about split saves, so some info may be inaccurate.

Split saves are just region files that are compressed with special RLE, it seems.

| Name | Size (in bytes) | Description |
| :-:|:-:|:-:|
| Decompressed Size | 0x04 (uint) | |
| Compressed Region | Variable | Compressed with what seems to be a special RLE that is only used for split saves. |
