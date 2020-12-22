import React from 'react';
import { useRouter } from 'next/router';
import Modal from './modal';
import MovieForm from './movieform';
import { createMovie } from '../actions/index';

const SideMenu = ({ categories, appName, changeCategory, activeCategory }) => {
	let modal = null;
	const router = useRouter();

	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			modal.closeModal();
			router.push('/');
		});
	};

	// can only access class components

	return (
		<>
			<h1 className='my-4'>{appName}</h1>
			<Modal hasSubmit={false} ref={(ele) => (modal = ele)}>
				<MovieForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<br />
			<br />
			<div className='list-group'>
				{categories &&
					categories.map((category) => (
						<a
							href='#'
							className={`list-group-item ${activeCategory === category.name ? 'active' : ''}`}
							key={category.name}
							onClick={() => changeCategory(category.name)}>
							{category.name.toUpperCase()}
						</a>
					))}
			</div>
		</>
	);
};

export default SideMenu;
