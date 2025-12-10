# Set Time Packet (Clientbound)

### Info
| Name           | Value       |
|----------------|-------------|
| ID             | 0x04 (4)    |
| Estimated Size | 16          |
| Direction      | Clientbound |

## Network Structure
| Name                | Type/Size           |
|---------------------|---------------------|
| Game Time           | Long (0x08)         |
| Day Time            | Long (0x08)         |

## Class Structure
| Name                | Type          | Default  |
|---------------------|---------------|----------|
| Game Time           | long long     | 0        |
| Day Time            | long long     | 0        |
