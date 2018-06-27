import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    savedArticles:[],
    topic: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>{
        this.setState({ savedArticles: res.data })
      })
      .catch(err => console.log(err));
  };

  SaveArticle = id => {
    
    API.saveArticle(this.state.articles.filter(article=> article.id===id)[0])
      .then(res => {
        this.setState({
          articles: this.state.articles.filter(article => article.id !== id),
          savedArticles: [...this.state.savedArticles, res.data]
        
      })
      .catch(err => console.log(err));
  })
};

deleteArticle = (id) => {
  console.log(id);
  API.deleteArticle(id)
    .then(()=> {this.loadArticles()})
    .catch(err => console.log(err));
};


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.search(`&q=${this.state.topic}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`)
               .then(res=>{
                 let articles =res.data.response.docs.map(article =>{
                   return{
                     id: article._id,
                     url: article.web_url,
                     date: article.pub_date,
                     title: article.headline.main
                   }
                  });    
                  this.setState({articles:articles});
                  console.log("state",this.state.articles);
                }).catch(err => console.log(err));  
  };

  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for Article</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="start date YYYY (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="end date YYYY (required)"
              />
              <FormBtn
                // disabled={
                //   !(
                //     this.state.topic &&
                //     this.state.startYear &&
                //     this.state.endYear
                //   )
                // }
                onClick={this.handleFormSubmit}
              >
                Find Article
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Top 5 Results</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.slice(0,5).map(article => (
                  <ListItem key={article.id}>
                    <h2>{article.title}</h2>
                    <a target="_blank" href={article.url}><h3>Read the article, Click here!</h3></a>
                    <h3>{article.date}</h3>
                    
                    <SaveBtn
                      onClick={() => this.SaveArticle(article.id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1>Saved Articles</h1>
          </Jumbotron>
          {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map(article => (
                  <ListItem key={article.id}>
                    <h2>{article.title}</h2>
                    <a href={article.url} target="_blank"><h2>Read the article, Click here!</h2></a>
                    <DeleteBtn
                      onClick={() => this.deleteArticle(article._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>

      </Container>
    );
  }
}

export default Articles;
