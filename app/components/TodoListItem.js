/*var React = require('react');

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children}</li>
		);
	}
});

module.exports = TodoListItem;*/

import React, { PropTypes } from 'react'

const Todo = ({ todo, text, delTodo }) => (
  <li>
   {text}
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
