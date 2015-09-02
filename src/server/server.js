import express from "express";
import React from "react";
import Router from "react-router";
import pg from 'pg';
const app = express();
const connectionString = process.env.DATABASE_URL || 'postgres://bxujcozubyosgb:m1rgVoS1lEpdCZVRos6uWZVouU@ec2-54-235-146-58.compute-1.amazonaws.com:5432/d42dnjskegivlt?ssl=true';

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";
var connection;

ConnectToDb(connectionString);

app.get('/database/posts', function (req, res){
	if(connection.status == "SUCCESS"){
		var rows = [];
		connection.client
		.query('SELECT * FROM post;')
		.on('row', function(row){
			rows.push(row);
		})
		.on('end', function(result){
			res.send(JSON.stringify(rows));
		});
	} else {
		DbConnectionFail(res);
	}
});

app.get('/*', function (req, res) {
	if(connection.status == "SUCCESS" && req.path.indexOf("/database") == 0){
		Router.run(routes, req.url, Handler => {
			let content = React.renderToString(<Handler />);
			res.render('index', { content: content });
		});
	} 
	else if(req.path.indexOf("/database") == 0){
		console.log("API request was made")
	} 
	else {
		console.log("Db connection fail");
	}
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

function ConnectToDb (connectionString){
	pg.connect(connectionString, function(err, client) {
		if (err){
			error = err;
		}
		console.log('Connected to postgres! Getting schemas...');
		connection = err ? { status : "ERROR", error : err } : { status : "SUCCESS", client : client };
	});
}

function DbConnectionFail (res){
	res.status(500).send('ERR:Database not connected. Attempting to restart.');
	//attempt to restart the db
	connection = ConnectToDb(connectionString);
	if (connection.status === "ERROR"){
		console.log("Connection failed. Email Michael.");
		connection = null;
	} else {
		console.log("Successful reconnect");
	}
}