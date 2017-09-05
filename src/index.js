import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import registerServiceWorker from './registerServiceWorker';
// import styled from 'styled-components';


//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import App from './Components/App.js';
import BaseLayout from './Components/BaseLayout.js';
import CreatePost from './Components/CreatePost.js';
import PostList from './Components/PostList.js';
import ShowPost from './Components/ShowPost.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/ShowPost" component={PostList}/>
          <Route path="/ShowPost/:id" component={ShowPost} />
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/PostList" component={PostList}/>

      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
