# Set Experience Packet (Clientbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0x2B (43)   |
| Estimated Size |             |
| Direction      | Clientbound |

## Network Structure
| Name                | Type/Size            |
|---------------------|----------------------|
| Experience Progress | Float (0x04)         |
| Total Experience    | Integer (0x04)       |
| Experience Level    | Integer (0x04)       |

## Class Structure
| Name                | Type     | Default  |
|---------------------|----------|----------|
| Experience Progress | float    | 0.0      |
| Total Experience    | int      | 0        |
| Experience Level    | int      | 0        |