import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  getAPI = (topic, yearStart, yearEnd) => {
    API.search(topic, yearStart, yearEnd)
      .then(res => {
        const results = res.data.response.docs;
        this.setState({ results });
        console.log(results);
      })
      .catch(err => console.log(err));
  };
  SaveArticle = id => {
    API.SaveArticle(id)
      .then(res => this.loadArticles())
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
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.search(`"&q=${this.state.topic}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`)
               .then(res=>console.log(res))
               .catch(err => console.log(err));

    }
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
            {this.state.articles.length>0 ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.topic} from {article.date}
                        Click to read full article {article.url}
                      </strong>
                    </Link>
                    <SaveBtn
                      onClick={() => this.SaveArticle(article._id)}
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
            </Col>
            </Row>

      </Container>
    );
  }
}

export default Articles;
