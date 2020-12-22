import axios from 'axios';
import { json } from 'body-parser';

const BASE_URL = 'http://localhost:3000';
const MOVIE_DATA = [];

const CATEGORY_DATA = [
	{ id: '1', genre: 'drama' },
	{ id: '2', genre: 'action' },
	{ id: '3', genre: 'adventure' },
];

// get categories function
// get categories on index page
// provide it to side menu
// link side menu to category page

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(CATEGORY_DATA);
			reject('Cannot fetch category data :(');
		}, 50);
	});
};

// export const getMovies = () => {
// 	// 2 vals, first is function, second is time in milliseconds
// 	return new Promise((resolve, reject) => {
// 		// this is a promise
// 		// this will speed up your site!!
// 		// HYDRATION
// 		setTimeout(() => {
// 			resolve(MOVIE_DATA);
// 			reject('Cannot fetch movie data :(');
// 		}, 2000);
// 	});
// };

// // export const getMovieById = (id) => {
// // 	return new Promise((resolve, reject) => {
// // 		//gets the  index of the movie
// // 		const movieIndex = MOVIE_DATA.findIndex((movie) => movie.id === id);
// // 		//gets the movie by the index
// // 		const movie = MOVIE_DATA[movieIndex];
// // 		setTimeout(() => resolve(movie), 50);
// // 	});
// // };

// export const getMovies = () => {
// 	return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
// 		//axios returns a Promise
// 		return res.data;
// 	});
// };
export const getMovies = () => {
	return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => res.data);
};

export const getMovieById = (id) => {
	return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);
};

export const createMovie = (movie) => {
	movie.id = Math.random().toString(36).substr(2, 5);
	return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => res.data);

	// return new Promise((resolve, reject) => {
	// 	// create an id for the movie
	// 	movie.id = Math.random().toString(36).substr(2, 7);
	// 	// push that data to the movie
	// 	MOVIE_DATA.push(movie);
	// 	setTimeout(() => {
	// 		resolve(MOVIE_DATA);
	// 		reject('Cannot fetch movie data :(');
	// 	}, 50);
	// });
};
