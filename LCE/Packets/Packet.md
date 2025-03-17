# Packet

## Base Class

### Written as
| Name      | Type/Size                              | Notes                                                 |
|-----------|----------------------------------------|-------------------------------------------------------|
| Packet ID | int (0x04)                             |                                                       |
| Data      | ```Packet::write(DataOutputStream*)``` | Whatever is written by the overridden `Packet::write` |

### Structure
| Name                            | Type/Size                                              | Notes                                             |
|---------------------------------|--------------------------------------------------------|---------------------------------------------------|
| Packet                          | Packet (0x18)                                          | Inherited                                         |
| std::enable_shared_from_this<T> | std::enable_shared_from_this<T> (0x10)                 | Inherited                                         |                                             |
| Inheritor Packet                | this                                                   | Structure of the inheritor (e.g DisconnectPacket) |