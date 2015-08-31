import { Router, Route } from "react-router";
import React from "react";

import AppController from "./components/AppController";
import PostController from "./components/PostController";
//modify this one to be the errors file.
import ServerErrorController from "./components/ServerErrorController";

export default (
	<Router>
		<Route handler={ AppController } path="/" /> 
		<Route handler={ PostController } path="/post" />
		<Route handler={ ServerErrorController } path="/server_error" />
	</Router>
);