import React from 'react';
import { getPosts } from '../actions/index';

class Posts extends React.Component {
	static async getInitialProps() {
		const posts = await getPosts();
		return { posts };
	}

	render() {
		const posts = this.props.posts;
		//console.log(posts)
		return (
			<div className='container'>
				<h1>posts page</h1>
				<ul>
					{posts.map((post) => {
						console.log(post);
						<li key={post.id}>
							<h1>{post.id}:</h1>
							<span>{post.title}</span>
						</li>;
					})}
				</ul>
				{/* {JSON.stringify(posts)} */}
			</div>
		);
	}
}

export default Posts;
