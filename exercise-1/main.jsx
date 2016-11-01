// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
	render:function() {
		var name = "My name is Constance La.";
		var interest = "I am interested in board games."
		return(
			<div>
				<p>{name}</p>
				<p>{interest}</p>
			</div>
		)
	}
});

ReactDOM.render(<MyComponent/>, document.querySelector('main'));
    // In your render function...
        // Set variables `name` and `interest`


        // Return div with two paragraphs


// Render your component in the `main` section
