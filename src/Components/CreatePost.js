import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class CreatePost extends Component {

  constructor(){
    super();

  this.state = {
    author: '',
    title: '',
    blog: '',
  };

this.handleAuthor = this.handleAuthor.bind(this);
this.handleTitle= this.handleTitle.bind(this);
this.handleBlog = this.handleBlog.bind(this);
}

handleAuthor(e) {
  this.setState({author: e.target.value});
}
handleTitle(e) {
  this.setState({title: e.target.value});
}
handleBlog(e) {
  this.setState({blog: e.target.value});
}

  addToList = (e) => {
      e.preventDefault();
      this.setState({
        author: e.target.value,
        title: e.target.value,
        blog: e.target.value
      });

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/",
      {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })

  .then(response => this.props.history.push('/PostList'))

  .catch(err => {
  console.log(err, "boo!");
  });

  this.setState({author: '', title: '',  blog:''});
  }

    componentDidMount() {
      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")

      .then(results => {
      return results.json();
      })

      .then(data => {
        this.setState({blogs: data});
        console.log("state", this.state.blogs);
      })
    }

  render() {
    return (
      <div className="newBlogContainer">
        <h1>Create a New Blog Post</h1>

        <div id="blogForm">
        <form>

        <input className="form_input" name="author" type="text" placeholder="Author" onChange={this.handleAuthor} value={this.state.author}/>

        <br></br>

        <input className="form_input" name="title" type="text" placeholder="Blog Title" onChange={this.handleTitle} value={this.state.title}/>

        <br></br>

        <input className="form_input" name="blog" type="textarea" placeholder="Blog" onChange={this.handleBlog} value={this.state.blog}/>

        <br></br>

        <button id="addBlog" type="submit" value="Submit" onClick={this.addToList} href="/ShowPost/:id">Add Blog</button>
        </form>

      </div>
    </div>
    );
  }
}
