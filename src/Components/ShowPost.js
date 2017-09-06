import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class ShowPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      blog: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL)
    .then(response => response.json())
    .then(data =>
      this.setState({author: data.author, title: data.title, blog: data.blog}))
  }

  render() {
    return (
      <div className="container">
      <h1>This is the Show Post! </h1>
        <h1 className="blogTitle">{this.state.title}</h1>
        <h4 className="blogAuthor">{this.state.author}</h4>
        <p>{this.state.blog}</p>
      </div>
    )
    console.log(this.state);

  }
}
