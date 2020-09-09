import React from "react";
import { Link } from "react-router-dom";
import exclamation from "../img/exclamation.svg";
import "../css/styles.css";

function App() {
	return (
			<main>
				<div className="container">
					<div className="exclamation_container">
						<div className="box"></div>
						<div className="box"></div>
						<img
							src={exclamation}
							alt="exclamation icon"
							className="exclamation"
						/>
					</div>
					<div className="userhistory">
						<h1>We Can't find this page</h1>
						<p>
							The page you are looking for might was removing or is temporarily
							unavailable
						</p>
						<Link to="/" className="button">
							GO TO HOME
						</Link>
					</div>
				</div>
			</main>
	);
}

export default App;
