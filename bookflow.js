use("BookFlow")

db.book_metadata.find({ avgRating: { $gt: 4 } })

db.book_metadata.find({
  formats: { $in: ["Digital", "Audiobook"] }
})

db.book_metadata.find({
  formats: { $regex: "Digital", $options: "i" }
})

db.book_metadata.aggregate([
  { $match: { publishedYear: { $gt: 2020 } } },
  { $unwind: "$reviews" },
  {
    $group: {
      _id: "$title",
      avgReviewRating: { $avg: "$reviews.rating" },
      totalReviews: { $sum: 1 },
      author: { $first: "$author" }
    }
  },
  { $sort: { avgReviewRating: -1 } },
  {
    $project: {
      _id: 0,
      title: "$_id",
      author: 1,
      avgReviewRating: { $round: ["$avgReviewRating", 2] },
      totalReviews: 1
    }
  }
])

db.book_metadata.createIndex({
  "reviews.comment": "text"
})

db.book_metadata.find({
  $text: { $search: "Digital" }
})

db.book_metadata.find({
  $text: { $search: "Digital" }
}).explain("executionStats")