import React from "react";
import PostStore from '../stores/PostStore';
import Router from "react-router";

var RouteHandler = Router.RouteHandler;

export default class AppController extends React.Component {  
	render() {
		return(
			<div>
				<h1>Hello Michael</h1>
				<RouteHandler/>
			</div>
    	);
	}
}