const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll);
  // .post(articleController.create);

// router.route("/articles")
//   .get(articleController.findAll);
  // .post(articleController.create)
  // .put(articleController.update);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;

//The following is code from the api lucybot:

// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "2c059133ec67450c914b559907782919",
//     'q': "dogs",
//     'begin_date': "20140101",
//     'end_date': "20191231"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })