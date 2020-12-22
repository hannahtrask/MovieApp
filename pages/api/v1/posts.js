import axios from 'axios';

export default async (req, res) => {
	// ifs for each request method, can also do switch statement here

    
    
		// get request
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const posts = response.data;
		res.json(posts.slice(0, 20));
	
};
