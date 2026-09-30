# BookFlow MongoDB Lab Experiment 3

## Objective
BookFlow uses MongoDB to manage book metadata, reviews and technical specifications.

## Tasks Completed

### Task 1: Document Modeling
- Created `BookFlow` database
- Created `book_metadata` collection
- Stored book reviews as embedded documents
- Used `member_id` as a reference

### Task 2: Advanced Querying
- `$gt` to find books rated above 4
- `$in` to find Digital/Audiobook books
- `$regex` to search Digital formats
- Regex search inside review comments

### Task 3: Aggregation Pipeline
Used:
`$match → $unwind → $group → $sort → $project`

Generated the Top Rated report.

### Task 4: Indexing
Created a text index on:

`reviews.comment`

Used `$text` search for "Digital".

Verified index usage using:

`explain("executionStats")`

The winning plan returned `TEXT_MATCH`.

## Database
- Database: `BookFlow`
- Collection: `book_metadata`
- Documents: 4