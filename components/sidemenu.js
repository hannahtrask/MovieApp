import React from 'react';
import Modal from './modal';
import MovieForm from './movieform';
import { createMovie } from '../actions/index';

const SideMenu = ({ categories, appName }) => {
	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => console.log(JSON.stringify(movies)));
	};

	return (
		<>
			<h1 className='my-4'>{appName}</h1>
			<Modal hasSubmit={false}>
				<MovieForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<br />
			<br />
			<div className='list-group'>
				{categories &&
					categories.map((category) => (
						<a href='#' className='list-group-item'>
							{category.name.toUpperCase()}
						</a>
					))}
			</div>
		</>
	);
};

export default SideMenu;
