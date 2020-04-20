import React from "react"

class Form extends React.Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			location: "",
			isVegan: false,
			isKosher: false,
			isLactoseFree: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target

		type === "checkbox" ? 
		this.setState({
			[name]: checked
		}) :
		this.setState({
			[name]: value
		})
	}

	render() {
		return(
				<div>
					<h1>React Form Example</h1>
					<main>
		                <form>
		                    <input type="text" name="firstName" onChange={this.handleChange} placeholder="First Name" /><br />
		                    <input type="text" name="lastName" onChange={this.handleChange} placeholder="Last Name" /><br />
		                    <input type="text" name="age" onChange={this.handleChange} placeholder="Age" /><br /><br />
		                    
		                    {/* Create radio buttons for gender here */}
		                    <input type="radio" name="gender" onChange={this.handleChange} value="male" /> Male
		                    <br />
		                    <input type="radio" name="gender" onChange={this.handleChange} value="female" /> Female
		                    <br /> 
		                    <br />
		                    
		                    {/* Create select box for location here */}
		                    <label>Select your  location</label><br />
		                    <select name="location" value={this.state.location} onChange={this.handleChange}>
		                    	<option value="New York">  New York </option>
		                    	<option value="Florida">  Florida </option>
		                    	<option value="Seattle">  Seattle </option>
		                    	<option value="Hawaii">  Hawaii </option>
		                    </select>
		                    <br />
		                    
		                    {/* Create check boxes for dietary restrictions here */}
		                    <br />
		                    <label>
			                    <input 
			                    	type="checkbox"
			                    	name="isVegan"
			                    	checked={this.state.isVegan}
			                    	onChange={this.handleChange}
			                    /> Vegan
		                    </label>
		                    <br />
		                    <label>
			                    <input 
			                    	type="checkbox"
			                    	name="isKosher"
			                    	checked={this.state.isKosher}
			                    	onChange={this.handleChange}
			                    /> Kosher
		                    </label>
		                    <br />
		                    <label>
			                    <input 
			                    	type="checkbox"
			                    	name="isLactoseFree"
			                    	checked={this.state.isLactoseFree}
			                    	onChange={this.handleChange}
			                    /> Lactose Free
		                    </label>
		                    <br />
		                    <button>Submit</button>
		                </form>
		                <hr />
		                <h2>Entered information:</h2>
		                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
		                <p>Your age: {this.state.age}</p>
		                <p>Your gender: {this.state.gender}</p>
		                <p>Your destination: {this.state.location}</p>
		                <p>
		                    Your dietary restrictions: 
		                    {this.state.isVegan ? "Vegan" : "Not Vegan"}
		                </p>
		            </main>
				</div>
			)
	}
}

export default Form