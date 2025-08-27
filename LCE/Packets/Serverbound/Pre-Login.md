# Pre-Login Packet (Serverbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0xE8 (232)  |
| Estimated Size |             |
| Direction      | Serverbound |

### Structure
| Name             | Type/Size      | Notes            |
|------------------|----------------|------------------|
| Protocol Version | short (0x02)   | Set to 0 in ctor |                  |
| Player Name      | UTF (0x20 max) |                  |

### Written as
| Name             | Type/Size    | Notes                                                         |
|------------------|--------------|---------------------------------------------------------------|
| Protocol Version | Short (0x02) | Always the client's protocol version (e.g 1920 for NX latest) |
| Player Name      | UTF          |                                                               |

## Class Structure

| Name             | Type         | Notes                |
|------------------|--------------|----------------------|
| Protocol Version | short        |                      |
| Name             | std::wstring | probably player name | 