import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="baseLayout">
       <h1>Kelly's React Blog</h1>
        <div className = "navBar">
          <ul>
            <li><button className="btn"><Link to="/CreatePost">Create New Post</Link></button></li>
            <li><button className="btn"><Link to="/PostList">All Blog Posts</Link></button></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}
