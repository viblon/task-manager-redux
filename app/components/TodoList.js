/*var React = require('react');
var TodoListItem = require('./TodoListItem');

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

module.exports = TodoList;*/

import React, { PropTypes } from 'react'
import Todo from './TodoListItem'
import { connect } from 'react-redux'

let TodoList = ({ todos }) => (
  <ol className="bullet">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ol>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

TodoList = connect(
  mapStateToProps
)(TodoList)

export default TodoList
