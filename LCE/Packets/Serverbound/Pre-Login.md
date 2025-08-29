# Pre-Login Packet (Serverbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0xE8 (232)  |
| Estimated Size |             |
| Direction      | Serverbound |

## Network Structure
| Name             | Type/Size      | Notes                                                                |
|------------------|----------------|----------------------------------------------------------------------|
| Protocol Version | Short (0x02)   | Always written as the client's protocol version (1920 for NX latest) |
| Player Name      | UTF (0x20 max) |                                                                      |

## Class Structure
| Name             | Type         | Notes                                               |
|------------------|--------------|-----------------------------------------------------|
| Protocol Version | short        | Set to 0 in ctor, with a constant used when writing |
| Name             | std::wstring | probably player name                                | 