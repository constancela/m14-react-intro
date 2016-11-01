// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
	render: function() {
		return(
			<div>
				<p>{this.props.p1}</p>
				<p>{this.props.p2}</p>
			</div>
		)
	}
});

ReactDOM.render(<MyComponent p1="Hello, my name is Constance" p2="I am interested in board games" />,
	document.querySelector('main')
);
    // In your render function...

            // Return div with two paragraphs

// Render your component in the `main` section
