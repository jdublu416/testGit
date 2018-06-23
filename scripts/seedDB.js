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


const articleSeed = [

  {
    title: "Born a Crime: Stories from a South African Childhood",
    date: new Date(Date.now()),
    url: "https://google.com"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(API.res.data))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
