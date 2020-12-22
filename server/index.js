// this is a good template!!!!!

const next = require('next');
const express = require('express');
//const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');
const path = require('path');
const filePath = './movies.json';
const moviesData = require(filePath);

app.prepare().then(() => {
	const server = express();
	// THIS IS A MIDDLEWARE!
	server.use(express.json());

	server.get('/api/v1/movies', (req, res) => {
		res.json(moviesData);
	});

	server.get('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		//console.log(id)
		// gets the  index of the movie
		const movie = moviesData.find((movie) => movie.id === id);
		res.json(movie);
		//console.log(movie)
		// gets the movie by the index
	});

	server.get('/faq', (req, res) => {
		// this can be a separate html document that you import into this file
		res.send('<html><head></head><body><h1>hello world</h1></body></html>');
	});

	// handling all requests coming in: *
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.post('*', (req, res) => {
		return handle(req, res);
	});

	// MOST COMMON POST, PATCH, DELETE!
	server.post('/api/v1/movies', (req, res) => {
		// ADD ID
		const movie = req.body;
		//console.log(JSON.stringify(movie));
		moviesData.push(movie);

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);

		// 3 vals, path, data itself, and callback func to handle error
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				return res.status(422).send(err);
			}
			return res.json('Movie successfully added :)');
		});

		// return res.json({ ...movie });
	});

	server.delete('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		const movieIndex = moviesData.findIndex((movie) => movie.id === id);
		moviesData.splice(movieIndex, 1);

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);

		// 3 vals, path, data itself, and callback func to handle error
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				return res.status(422).send(err);
			}
			return res.json('Movie successfully added :)');
		});
	});

	server.patch('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		const movie = req.body;
		const movieIndex = moviesData.findIndex((movie) => movie.id === id);

		moviesData[movieIndex] = movie;

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);

		// 3 vals, path, data itself, and callback func to handle error
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				return res.status(422).send(err);
			}
			return res.json('Movie successfully updated :)');
		});
	});

	const PORT = process.env.PORT || 3000;

	server.use(handle).listen(PORT, (err) => {
		if (err) throw err;
		console.log('> Ready on port ' + PORT);
	});
});
