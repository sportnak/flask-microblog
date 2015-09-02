import alt from '../../server/alt';

class PostAction {
	updatePosts(posts){
		this.dispatch(posts);
	}
}

module.exports = alt.createActions(PostAction);