import axios from "axios";

//get the base url for the api and the api key to unlock access
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
//const query = `${"&q="+topic+"&begin_date"+startYear+"1010"+"&end_date=" + endYear+"1231"}`;
const APIKEY = "&api_key=3515f28047c34171892692a81be4112b";


export default {
  // Gets all articles
  search: function(query) {
    console.log("API search called");
    console.log(query)
    return axios.get(BASEURL + APIKEY + query);
  },
  //example code reference:
//  search: ({topic, startYear, endYear}) => {
//     let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;    
//     queryString += `?api-key=2d9e638d0b41450a932a20d88d570fd0&q="${topic}"`;
//     queryString += `&begin_date=${(startYear) ? startYear : 1900}0101`;
//     queryString += `&end_date=${(endYear) ? endYear : (new Date()).getFullYear()}1231`;

//     return axios.get(queryString); 
// },

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
