# Minecraft PE 0.8.1 Chunk Format Documentation

## 1. NBT Format (level.dat)
- **File Type**: Uncompressed little-endian NBT file.
- **Header** (8 bytes):
  - **4 bytes**: Storage version (little-endian integer).
  - **4 bytes**: Length of the file (excluding the header).

### Important Tags:
- **GameType**:
  - 0 = Survival.
  - 1 = Creative.
- **LastPlayed**: Unix timestamp for the last save.
- **LevelName**: World name.
- **Platform**: Typically `2` (Bedrock).

### Player Data:
- **Armor**: A list of 4 `TAG_Compound` values (helmet, chestplate, leggings, boots).
- **Inventory**:
  - `id`: Item or Block ID.
  - `count`: Number of items.
  - `damage`: Wear and tear on tools/armor.
  - `slot`: Inventory slot number.
- **Abilities**:
  - `mayfly`: 1 = Can fly.
  - `invulnerable`: 1 = Immune to damage.
  - `mayBuild`: 1 = Can place/destroy blocks.

### World Data:
- **SpawnX/SpawnY/SpawnZ**: Spawn coordinates.
- **Time**: Tracks time of day in ticks (`mod 19200`).
- **DayCycleStopTime**: Stops the day/night cycle at specific ticks.
- **RandomSeed**: Seed for world generation.
- **spawnMobs**: 1 = Mob spawning enabled.

### Compression:
- **None** (file is uncompressed).

---

## 2. Chunk Data (chunks.dat)
### Chunk Dimensions:
- **16×16×128 blocks (YZX - Y iterates first)**.
- Organized into **32×32 sections**, storing up to **512×512×128 blocks**.
- Default world generates **256 chunks**.

### File Structure:
- Divided into **4 KB sectors**.
  - **First sector**: Chunk index (4 bytes per chunk).
    - **1st byte**: Number of 4 KB sectors the chunk occupies.
    - **Next 3 bytes**: Chunk location (little-endian).
    - **Example**: `15 51 01 00` = Chunk starts at sector 337, taking 21 sectors.

### Chunk Data Structure:
- **Block Data** (first 32,768 bytes): Block order is **YZX** (Y iterates first). Uses a 3D array: `[16][16][128]`.
- **Meta/Data** (next 16,384 bytes): Auxiliary data (e.g., wool color, chest orientation).
  - **Stored as half-byte** per block (two blocks per byte).
- **Skylight Data** (next 16,384 bytes): Sunlight hitting blocks. Same format as block data.
- **Blocklight Data** (next 16,384 bytes): Light emitted by blocks (e.g., glowstone).
- **Biome Data** (last 256 bytes): Block order is **ZX** (Z iterates first). Biome info per block. Stored as **16 bytes per row**.

---

## 3. Entities (entities.dat)
- **File Type**: Modified little-endian NBT format.
- **Header** (12 bytes):
  - **ASCII "ENT"**.
  - **1 zero byte**.
  - **4-byte integer**: Version (always 1).
  - **4-byte integer**: Length of file (excluding header).

### Entity Data:
- **Entities List**: Contains entity-specific NBT data.
  - **Common Fields**:
    - `id`: Entity type ID (e.g., Zombie = 32, Sheep = 13).
    - `Pos`: Position (X, Y, Z).
    - `Motion`: Velocity (dX, dY, dZ).
    - `Rotation`: Yaw and Pitch.
  - **Mobs**: Additional tags (e.g., Health, HurtTime, AttackTime, DeathTime).
  - **Sheep**: Special tags like `Sheared` and `Color`.
  - **Item Entities**: `id`, `count`, `damage`, `age` (time until despawn).

---

## 4. File Format Changes
- **Compression**: None (uncompressed).
- **Block Data Storage**: Terrain, light data stored across multiple sections.
- **Entities**: Stored using an NBT-based structure, varies by entity type (e.g., mobs, items).

---

## 5. Raw NBT Data
- **InhabitedTime**: Total time chunk has been loaded with players nearby.
- **Entities**: List of mobs, items, and other entities in the chunk.
- **TileEntities**: Data for blocks with extra information (e.g., chests, furnaces).
- **Terrain Generation**: Includes random seeds, feature generation flags.
