import React from 'react';
import Link from 'next/link';

class MovieList extends React.Component {
	// state = {
	//     count: 0
	// }

	// // constructor does the same thing as the state
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		count: 0,
	//     };
	//     // if you aren't using arrow functions, you MUST use bind to bind the self to the function
	//     this.increment = this.increment.bind(this)
	// }

	// increment () {
	// 	//alert('incrementing number')
	// 	// const count = this.state.count
	// 	const { count } = this.state;
	// 	//debugger;
	// 	this.setState({
	// 		count: count + 1,
	// 	});
	// };

	// decrement = () => {
	// 	//alert('decrementing number')
	// 	const { count } = this.state;
	// 	//debugger;
	// 	this.setState({
	// 		count: count - 1,
	// 	});
	// };

	// this makes the text the same length on every things
	shorten = (text) => {
		if (text && text.length >= 100) {
			return text.substr(0, 200) + '...';
		}
		return text;
	};

	renderMovies(movies) {
		return (
			movies &&
			movies.map((movie) => {
				return (
					<div className='col-lg-4 col-md-6 mb-4' key={movie.id}>
						<div className='card h-100'>
							<Link href={`/movies/${movie.id}`}>
								<a>
									<img
										className='card-img-top'
										src={movie.image}
										alt='movie poster'
									/>
								</a>
							</Link>
							<div className='card-body'>
								<h4 className='card-title'>
									<Link href={`/movies/${movie.id}`}>
										<a>{movie.name}</a>
									</Link>
								</h4>
								<p className='card-text'>{this.shorten(movie.description)}</p>
							</div>
							<div className='card-footer'>
								<small className='text-muted'>Rating: {movie.rating}</small>
							</div>
						</div>
					</div>
				);
			})
		);
	}
	// use THIS keyword to call in render function, this just refers to the self, similar to python
	render() {
		const movies = this.props.movies;
		// DEBUGGER!!!
		//debugger;
		return (
			<>
				{/* <div>
					<button onClick={()=>this.increment()} className='btn btn-dark'>
						Increment Number
					</button>
					<button onClick={this.decrement} className='btn btn-dark'>
						Decrement Number
					</button>
					<h1>{this.state.count}</h1>
				</div> */}
				{/* passing props in class components, just use this.props.<variable that you passed>*/}
				{/* <h1>{this.props.count}</h1> */}
				{this.renderMovies(movies)}
			</>
		);
	}
}

export default MovieList;
