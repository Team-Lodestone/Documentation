# Pending Ticks (`3`) Format

## Byte Order

PendingTicks data is stored in **Little Endian** byte order.

## Parsing The Pending Ticks

Loop next section until you have parsed all pending ticks.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NBT Compound of a Pending Tick | Variable | Pending Tick data |
