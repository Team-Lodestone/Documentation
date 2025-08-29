<style>
    .bit {
        width: 4px;
        height: 10px;
        padding: 0;
        overflow: hidden;
    }

    .string {
        background-color: rgb(220, 138, 120);
    }

    .varint {
        background-color: rgb(221, 120, 120);
    }

    .bool {
        background-color: rgb(234, 118, 203);
    }

    .float {
        background-color: rgb(136, 57, 239);
    }
</style>

# Flexible Packet

FlexiblePacket is a packet that stores a packed 4 byte header which holds info on how many of what types the packet contains within

## Info
| Name           | Value                                 |
|----------------|---------------------------------------|
| [Estimated Size](#estimated-size) | See [Estimated Size](#estimated-size) |

### Network Structure
| Name                                      | Type/Size                              | Notes                                                   |
|-------------------------------------------|----------------------------------------|---------------------------------------------------------|
| [Packed Header](#packed-header-structure) | Int (0x04)                             | See [Packed Header Structure](#packed-header-structure) |
| Strings                                   | Utf[String Count]                      | Max of 255 strings                                      |
| Varints                                   | Varint[Varint Count]                   | Max of 4096 varints                                     |
| Bools                                     | 1 byte (only if any bools in header)   | Max of 8 booleans which are packed into one byte        |
| Floats                                    | Float[Float count] (0x04 * floatCount) | Max of 15 floats                                        |

### Class Structure
| Name     | Type                                       | Notes                                    |
|----------|--------------------------------------------|------------------------------------------|
| Packet   | 0x18 (24 bytes)                            | Base class                               |
| Strings  | std::vector&lt;std::wstring&gt; (24 bytes) | Holds all strings present in the packet  | 
| Varints  | std::vector&lt;int&gt; (24 bytes)          | Holds all varints present in the packet  | 
| Booleans | std::vector&lt;bool&gt; (24 bytes)         | Holds all booleans present in the packet | 
| Floats   | std::vector&lt;float&gt; (24 bytes)        | Holds all floats present in the packet   | 


### Packed Header Structure
<table>
    <tr>
        <td rowspan="8">Byte 0<br></td>
        <td rowspan="1" class="bit string"></td>
        <td rowspan="8">Strings</td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td class="bit string"></td>
    </tr>
    <tr>
        <td rowspan="8">Byte 1<br></td>
        <td class="bit varint"></td>
        <td rowspan="12">Varints</td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td rowspan="8">Byte 2<br></td>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit varint"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
        <td rowspan="8">Booleans</td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td rowspan="8">Byte 3<br></td>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit bool"></td>
    </tr>
    <tr>
        <td class="bit float"></td>
        <td rowspan="4">Floats</td>
    </tr>
    <tr>
        <td class="bit float"></td>
    </tr>
    <tr>
        <td class="bit float"></td>
    </tr>
    <tr>
        <td class="bit float"></td>
    </tr>
</table>
<small>Recreation of the table I generated using <a href="https://bitsaber.dev/">BitSaber</a></small>

### Estimated Size
```cpp
    sizeof(int) // 4 byte packed header
    + (sizeof(int) * mVarints.size() // All varints * size of int
    + strings // Length of all strings
    + (!mBools.empty()) // 1 if there are any bools
    + sizeof(float) * mFloats.size()); // All floats * size of float
```