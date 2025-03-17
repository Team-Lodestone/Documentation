# Pre-Login Packet (Serverbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0xE8 (232)  |
| Estimated Size |             |
| Direction      | Serverbound |

### Structure
| Name        | Type/Size                            | Notes            |
|-------------|--------------------------------------|------------------|
| Unknown     | short (0x02)                         | Set to 0 in ctor |
| Padding     | 0x06                                 |                  |
| Player Name | std::wstring                         |                  |

### Written as
| Name        | Type/Size    | Notes                                                                                 |
|-------------|--------------|---------------------------------------------------------------------------------------|
| Unknown     | Short (0x02) | Apparently always 0 (unconfirmed). This can maybe be used for custom clients... hmmm. |
| Player Name | UTF          |                                                                                       |
