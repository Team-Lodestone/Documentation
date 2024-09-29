# Actor Format

## Byte Order

Actor data is stored in **Little Endian** byte order.

## Parsing The Actors (Entities)

### Part 1 (Getting Actor IDs)

First get the array of Actor IDs from the database.

Should look something like this: `db.get(Bytes.concat("digp".getBytes(), chunkXBytes, chunkZBytes, dimentionIdBytes));`[\[1\]](#1)

Now loop over that array until you have parsed all Actor IDs.

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| ActorID | 8 | The Unique ID of the Actor |

### Part 2 (Getting Actor NBT Data)

Now we can get the actual NBT Data of the Actor from the database.

Should look something like this: `db.get(Bytes.concat("actorprefix".getBytes(), actorIDBytes));`

Now you have a byte array of the NBT data of the Actor.

## Notes

1. <a id="1"></a> `dimentionIdBytes` is omitted for the Overworld.
