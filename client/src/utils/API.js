import axios from "axios";

//get the base url for the api and the api key to unlock access
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";


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
