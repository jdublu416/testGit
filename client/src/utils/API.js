import axios from "axios";

//get the base url for the api and the api key to unlock access
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ nytAPI + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear;
// let query= "";
const APIKEY = "&api_key=2c059133ec67450c914b559907782919";


export default {
  // Gets all articles
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticles: function(id) {
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
