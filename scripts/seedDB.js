const mongoose = require("mongoose");
const db = require("../models");
const API= require("../client/src/utils/API")
mongoose.Promise = global.Promise;

// This file empties the articles collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);


db.Article.create(result)
.then(function(dbArticle) {
  // View the added result in the console
  console.log(dbArticle);
})
.catch(function(err) {
  // If an error occurred, send it to the client
  return res.json(err);
});

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(dbArticle))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
