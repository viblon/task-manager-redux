import React, { Component,PropTypes } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux'
class Profile extends Component{
	//console.log(this.props.params.profileId)
	// static propTypes = {
	// 	todos: PropTypes.object.isRequired
	// }

render(){
	return(
		<div>
      {this.props.todos[this.props.params.profileId].text}
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
