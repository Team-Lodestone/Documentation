# Packet

## Base Class

### Written as
| Name      | Type/Size                              | Notes                                                 |
|-----------|----------------------------------------|-------------------------------------------------------|
| Packet ID | int (0x04)                             |                                                       |
| Data      | ```Packet::write(DataOutputStream*)``` | Whatever is written by the overridden `Packet::write` |

<!-- https://github.com/vuejs/vitepress/issues/4597 -->

### Structure
| Name                                  | Type/Size                                    | Notes                                             |
|---------------------------------------|----------------------------------------------|---------------------------------------------------|
| Packet                                | Packet (0x18)                                | Inherited                                         |
| std::enable_shared_from_this&lt;T&gt; | std::enable_shared_from_this&lt;T&gt; (0x10) | Inherited                                         |
| Inheritor Packet                      | this                                         | Structure of the inheritor (e.g DisconnectPacket) |