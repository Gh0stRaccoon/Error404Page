import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer";
import notFound from "./containers/notFound";

ReactDOM.render(
	<Router>
		<div className="mainContainer">
			<Header />
			<Switch>
				<Route path="/" exact component={App} />
				<Route component={notFound} />
			</Switch>
			<Footer />
		</div>
	</Router>,
	document.getElementById("root")
);
