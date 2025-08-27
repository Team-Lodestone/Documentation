# Legacy Entity (`2`) Format

## Byte Order

Entity data is stored in **Little Endian** byte order.

## Parsing The Entities

Loop next section until you have parsed all entities.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NBT Compound of a Entity | Variable | A entities data |
