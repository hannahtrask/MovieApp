const MOVIE_DATA = [
	{
		id: '1',
		name: 'The Shawshank Redemption',
		releaseYear: 1994,
		description:
			'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
		long:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		rating: 4.8,
		genre: 'drama',
		image:
			'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
		cover:
			'https://images.unsplash.com/photo-1596284274000-7d3eca888e3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhdG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: '2',
		name: 'The Dark Knight',
		releaseYear: 2008,
		description:
			'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
		long:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		rating: 4.7,
		genre: 'action, crime, drama',
		image:
			'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
		cover:
			'https://images.unsplash.com/photo-1547438688-bc005987deed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: '3',
		name: 'Lord of the Rings',
		releaseYear: 2004,
		description:
			'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
		long:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		rating: 4.9,
		genre: 'adventure, drama, fantasy',
		image:
			'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
		cover:
			'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
];

export const getMovies = () => {
	// 2 vals, first is function, second is time in milliseconds
	return new Promise((resolve, reject) => {
		// this is a promise
		// this will speed up your site!!
		// HYDRATION
		setTimeout(() => {
			resolve(MOVIE_DATA);
			reject('Cannot fetch data :(');
		}, 2000);
	});
};

export const getMovieById = (id) => {
	return new Promise((resolve, reject) => {
		// gets the  index of the movie
		const movieIndex = MOVIE_DATA.findIndex((movie) => movie.id === id);
		// gets the movie by the index
		const movie = MOVIE_DATA[movieIndex];
		setTimeout(() => resolve(movie), 50);
	});
};
