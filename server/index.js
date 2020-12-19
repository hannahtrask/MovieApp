// this is a good template!!!!!

const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
	server.get('/api/v1/movies', (req, res) => {
		res.json({ msg: 'message' });
	});

	server.get('/faq', (req, res) => {
		// this can be a separate html document that you import into this file
		res.send('<html><head></head><body><h1>hello world</h1></body></html>');
	});
	// handling all requests coming in: *
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	const PORT = process.env.PORT || 3000;

	server.use(handle).listen(PORT, (err) => {
		if (err) throw err;
		console.log('> Ready on port ' + PORT);
	});
});
