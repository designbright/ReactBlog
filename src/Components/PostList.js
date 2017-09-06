import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class PostList extends Component {

  constructor(props) {
    super(props);

      this.state={
        blogs: []
      }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
    return results.json();
    })
    .then(data => {
    this.setState({blogs: data});
    console.log("state", this.state.blogs);
    })
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
    return results.json();
  })
    .then(data => {
    this.setState({blogs: data});
    })
  }

  render() {
    let items = this.state.blogs.map((post) => {
     if (post.author) {
       return(
         <Link to={`/ShowPost/${post._id}`} key={post._id}>
        <div id="blogPost">



        <h2> Author: {post.author}</h2>
        <h2> Title: {post.title}</h2>


         </div>
         </Link>

       );
     }
   });

    return (
      <div className="App">
      <h1> All Blog Posts </h1>
      {items}
      </div>
    );
  }
}
