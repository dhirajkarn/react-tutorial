import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/


class MainContent extends React.Component {

	constructor() {
		super()
		this.state = {
			loggedIn: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => {
			return {
				loggedIn: !prevState.loggedIn
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Simulate log in/out -> </h1>
				<button onClick={this.handleClick}>{this.state.loggedIn ? "Log Out" : "Log In"}</button>
				<h2>You have {this.state.loggedIn ? "Logged In" : "Logged Out"} </h2>
			</div>
		)
	}
}

export default MainContent