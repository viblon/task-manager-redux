/*var React = require('react');

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children}</li>
		);
	}
});

module.exports = TodoListItem;*/
import { Link } from 'react-router';

import React, { PropTypes } from 'react'

const Todo = ({ todo, text, delTodo }) => (
  <li><Link to={"/"+ todo.id} activeClassName="active">
   {todo.text}</Link>
    <button style={{float:"right"}} onClick={() => delTodo(todo.id)} >
      Х
    </button>
  </li>
)

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todo
