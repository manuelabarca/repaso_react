import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./component/menu.jsx";
import Home from "./component/home.jsx";
import Contact from "./component/contact.jsx";
import Error404 from "./component/404.jsx";

const App = () => {
	return (
		<Router>
			<Menu />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/contact/:user?">
					<Contact />
				</Route>
				<Route path="/character/:id">
					<Character />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
