/*var React = require('react');

var TodoForm = React.createClass({
	getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		React.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
				<input type='submit' value='Добавить'/>
			</form>
		);
	}
});

module.exports = TodoForm;*/

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ addTodo}) => {
  let input

  return (
    <div className="banner">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => {	//что это?
          input = node
        }} /><br/>
        <input type='submit' value='Добавить'/>
      </form>
    </div>
  )
}

const mapDispatchToProps =  ({
  addTodo: addTodo
})

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
