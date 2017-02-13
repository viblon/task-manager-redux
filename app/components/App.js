/*var React = require('react');
//var TodoBanner = require('./TodoBanner');
//var TodoList = require('./TodoList');
//var TodoForm = require('./TodoForm');

const TodoApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
				<TodoBanner number={this.state.items.length}/>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

module.exports = TodoApp;*/

import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList'
import AddTodo from '../containers/TodoForm'
//import VisibleTodoList from '../containers/VisibleTodoList'


export default class App extends Component {
  render() {
    return (
      <div style={{ width: 173}}>
        <TodoBanner/>
        <TodoList />
				<AddTodo />
      </div>
    );
  }
}
