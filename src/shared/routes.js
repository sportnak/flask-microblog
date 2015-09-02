import { Router, Route } from "react-router";
import React from "react";

import AppController from "./components/AppController";
import PostController from "./components/PostController.js";
//modify this one to be the errors file.
import ServerErrorController from "./components/ServerErrorController";

export default (
	<Route handler={ AppController } path="/"> 
		<Route name="post" handler={ PostController }/>
		<Route name="server_error" handler={ ServerErrorController }/>
	</Route>
);