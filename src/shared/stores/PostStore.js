import alt from '../../server/alt';
import Actions from '../actions/PostActions';

class PostStore{
	constructor(){
		this.locations = [];

		this.bindListeners({
			handleUpdatePosts: Actions.UPDATE_POSTS,
		});
	}

	handleUpdatePosts(posts){
		this.posts = posts;
	}
}

module.exports = alt.createStore(PostStore, 'PostStore');