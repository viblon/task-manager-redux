import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TodoBanner extends Component {
	render(){

		return (
			<div className="banner" style={{ width: 300}}>
				<h3 className="banner">
					<Link to="/" activeClassName="active">Список задач:</Link>
				</h3>
				<main>
								{this.props.children}
				</main>
			</div>
		);
	}
}
