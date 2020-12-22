import axios from 'axios';

export default async (req, res) => {
	// ifs for each request method, can also do switch statement here
	if (req.method === 'POST') {
		const postData = JSON.parse(req.body);
		//console.log(postData)

		res.json({ status: '200', ...postData });
    } 
    
    if (req.method === 'GET') {
		// get request
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const posts = response.data;
		res.json(posts.slice(0, 20));
	}
};
