import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="baseLayout">
        {this.props.children}
      </div>

    );
  }
}
