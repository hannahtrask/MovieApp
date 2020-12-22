import React from 'react';
import MovieForm from '../../../components/movieform';
import { getMovieById } from '../../../actions'

class EditMovie extends React.Component {

    static getInitialProps({query}) {
        return {query}
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const id = this.props.query.id
        getMovieById(id).then((movie)=>{
            this.setState({movie})
        })
    }

	render() {
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
                { JSON.stringify(this.state.movie) }
				<MovieForm />
			</div>
		);
	}
}

export default EditMovie;
