import React from 'react';
import Router from 'next/router';
import MovieForm from '../../../components/movieform';
import { getMovieById, updateMovie } from '../../../actions';

class EditMovie extends React.Component {
	static getInitialProps({ query }) {
		return { query };
	}

	// static async getInitialProps({ query }) {
    //     const movie = await getMovieById(query.id)
	// 	return { movie };
	// }

	state = {
		movie: {
			name: '',
			description: '',
			rating: '',
			image: '',
			cover: '',
			long: '',
		},
	};

	componentDidMount() {
	    const id = this.props.query.id;
		getMovieById(id).then((movie) => {
			this.setState({ movie });
		});
    }
    
    handleUpdateMovie = (movie) => {
		updateMovie(movie).then((updatedMovie) => {
			Router.push(`/movies/${movie.id}`)
		});
	};

	render() {
        //const { movie } = this.props
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				{/* { JSON.stringify(this.state.movie) } */}
				<MovieForm
                    submitButton='update'
					initialData={this.state.movie}
					handleFormSubmit={this.handleUpdateMovie}
				/>
				{/* <MovieForm initialData={this.props} /> */}
			</div>
		);
	}
}

export default EditMovie;
