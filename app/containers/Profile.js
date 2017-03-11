import React, { Component,PropTypes } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux'
class Profile extends Component{
	//console.log(this.props.params.profileId)
	// static propTypes = {
	// 	todos: PropTypes.object.isRequired
	// }

	constructor(props) {
		super(props);
		//fetchTasks();
		this.state = {
			text: this.props.todos[this.props.params.profileId].text||''
		}
		this.handleChange = this.handleChange.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({ text: e.target.value })
	}
render(){
	return(
		<div>
			<form onSubmit = {this.handleSubmit}>
        <input  value = {this.state.text}
                onChange = {this.handleChange}/><br/>
							<input type='submit' value='Принять изменения'/>
      </form>
		</div>
		)}
}



const mapStateToProps = (state) => ({
  todos: state.todos
})

// const mapDispatchToProps =  ({
//   delTodo: delTodo
// })

Profile = connect(
  mapStateToProps
)(Profile)

export default Profile
