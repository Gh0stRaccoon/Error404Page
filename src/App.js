import React from "react";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Click the button to see the error</h1>
			<Link to="/notFound" className="button">
				TRY IT
			</Link>
		</div>
	);
}

export default App;
