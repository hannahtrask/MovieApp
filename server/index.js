// this is a good template!!!!!

const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const moviesData = require('./movies.json')

app.prepare().then(() => {
	const server = express();
	// THIS IS A MIDDLEWARE!
	server.use(bodyParser.json());

	server.get('/api/v1/movies', (req, res) => {
		res.json(moviesData);
	});

	server.get('/faq', (req, res) => {
		// this can be a separate html document that you import into this file
		res.send('<html><head></head><body><h1>hello world</h1></body></html>');
	});

	// handling all requests coming in: *
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// MOST COMMON POST, PATCH, DELETE!
	server.post('/api/v1/movies', (req, res) => {
		const movie = req.body;
		console.log(JSON.stringify(movie))
		res.json({...movie});
	});
	server.patch('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		res.json({ msg: `updating ${id}` });
	});
	server.delete('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		res.json({ msg: `deleting ${id}` });
	});

	const PORT = process.env.PORT || 3000;

	server.use(handle).listen(PORT, (err) => {
		if (err) throw err;
		console.log('> Ready on port ' + PORT);
	});
});
