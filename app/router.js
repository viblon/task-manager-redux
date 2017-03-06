import React, { Component } from 'react';
import TodoBanner from './components/TodoBanner';
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import AddTodo from './containers/TodoForm'
import VisibleTodoList from './containers/VisibleTodoList'
import App from './components/App';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route component={TodoBanner}>
      <Route path="/" component={App} />
        <Route path=":profileId" component={Profile} />
      </Route>
  </Router>
);
