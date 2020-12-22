import React from 'react';
import MovieForm from '../../../components/movieform';
import { getMovieById } from '../../../actions';

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

	render() {
        //const { movie } = this.props
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				{/* { JSON.stringify(this.state.movie) } */}
                <MovieForm initialData ={this.state.movie} />
				{/* <MovieForm initialData={this.props} /> */}
			</div>
		);
	}
}

export default EditMovie;
