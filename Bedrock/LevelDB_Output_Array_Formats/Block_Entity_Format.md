# Block Entity (`1`) Format

## Byte Order

BlockEntity data is stored in **Little Endian** byte order.

## Parsing The Block Entities

Loop next section until you have parsed all block entities.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NBT Compound of a Block Entity | Variable | A block entities data |
