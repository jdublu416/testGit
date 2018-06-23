import axios from "axios";
// let topic = "dogs";
// let startYear=2012;
// let endYear=2013;

//get the base url for the api and the api key to unlock access
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
//const query = `${"&q="+topic+"&begin_date"+startYear+"1010"+"&end_date=" + endYear+"1231"}`;
const APIKEY = "&api_key=2c059133ec67450c914b559907782919";


export default {
  // Gets all articles
  search: function(query) {
    console.log("API search called");
    console.log(query)
    return axios.get(BASEURL  + APIKEY+ query);
  },

  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticlesId: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticles: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
