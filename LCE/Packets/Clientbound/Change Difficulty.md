# Change Difficulty Packet (Clientbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0xFD (253)  |
| Estimated Size |             |
| Direction      | Clientbound |

## Network Structure
| Name       | Type/Size            | Notes                                       |
|------------|----------------------|---------------------------------------------|
| Difficulty | Unsigned Byte (0x01) | Stored as an unsigned byte over the network |

## Class Structure
| Name       | Type              | Notes                                   |
|------------|-------------------|-----------------------------------------|
| Difficulty | Difficulty (enum) | Has no default                          |