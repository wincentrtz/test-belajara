import React, { Component } from "react";
import Calculator from "../components/pages/home/Calculator";
import CardSummaryContainer from "../components/pages/home/CardSummaryContainer";
import posts from "../services/modules/posts";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const data = posts.getPostData();
    data.then(response => {
      this.setState({ posts: response.data });
    });
  }

  renderPosts() {
    const { posts } = this.state;
    return posts.map(post => <div key={post.name}>{post.name}</div>);
  }

  render() {
    return (
      <div>
        <Calculator />
        <CardSummaryContainer />
        {this.renderPosts()}
      </div>
    );
  }
}

export default Home;
