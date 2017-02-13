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

const Todo = ({ text }) => (
  <li>
   {text}
    <button style={{float:"right"}}>
      Х
    </button>
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
