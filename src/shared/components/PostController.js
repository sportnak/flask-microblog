import React from "react";
import PostStore from "../stores/PostStore";

var	Posts = React.createClass({
	getInitialState(){
		return PostStore.getState();''
	},

	componentDidMount(){
		PostStore.listen(this.onChange);
	},

	componentWillUnmount(){
		PostStore.unlisten(this.onChange);
	},

	onChange(state){
		this.setState(state);
	},

	render() {
		if(this.state.posts){
			return (
				<div class="post-container">
					<div>Posts</div>
					<ul>
						{this.state.posts.map((post) => {
							return (
								<li>{post.id}</li>
							);
						})}
					</ul>
				</div>
			);
		} else {
			return (
				<div>No Posts Today</div>
			);
		}
		
	}
});

module.exports = Posts;