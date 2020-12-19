import React from 'react';
import SideMenu from '../components/sidemenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movielist';
import Footer from '../components/footer';

import { getMovies } from '../actions/index';

const Home = (props) => {
	// 	const [movies, setMovies] = useState([]);

	//   // factored as an async function
	// 	useEffect(() => {
	// 		// this uses a promise to access the movies from index.js in actions/index.js
	//     // this is asynchronous because of the promise written in that file
	//     const fetchData = async () => {
	//       const resMovies = await getMovies()
	//       setMovies(resMovies)
	//     }

	//     fetchData()
	// 		// getMovies().then((movies) => {
	// 		// 	setMovies(movies);
	// 		// });
	// 		// any time something in the array changes, the function will run again
	// 	}, []);

	return (
		<div>
			<div className='container'>
				{/* <button className='btn btn-dark' onClick={increment}>
						Increment Number
					</button>
					<button className='btn btn-dark' onClick={decrement}>
						Decrement Number
					</button> */}
				<div className='row'>
					<div className='col-lg-3'>
						<SideMenu appName={'Movie DB'} />
					</div>
					<div className='col-lg-9'>
						<Carousel />
						<div className='row'>
							<MovieList movies={props.movies} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
// this is outside the functional component, and MUST be async
// this will get props before page load server-side
// fast!!!!
Home.getInitialProps = async () => {
	const movies = await getMovies();
	return { movies };
};

// // REFACTORED AS CLASS COMPONENT
// class Home extends React.Component {
// // this is an async functions
// // this static means it's not bound to a class itself, so you can use it anywhere!
// // this is next js specific
// 	static async getInitialProps() {
// 		const movies = await getMovies()
// 		return {
// 			movies
// 		}
// 	}

// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		movies: [],
// 	// 		error: '',
// 	// 	};
// 	// }

// 	// // called only once when component mounts on CLIENT SIDE. need this in class components
// 	// componentDidMount() {
// 	// 	getMovies()
// 	// 		.then((movies) => {
// 	// 			this.setState({ movies });
// 	// 		})
// 	// 		.catch((err) => {
// 	// 			this.setState({ error: err });
// 	// 		});
// 	// }

// 	render() {
// 		const {movies} = this.props
// 		return (
// 			<div>
// 				<Head>
// 					<title>Home</title>
// 					<link
// 						rel='stylesheet'
// 						href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
// 						integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
// 						crossOrigin='anonymous'
// 					/>
// 					<script
// 						src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
// 						integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
// 						crossOrigin='anonymous'></script>
// 					<script
// 						src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
// 						integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
// 						crossOrigin='anonymous'></script>
// 					<script
// 						src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
// 						integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
// 						crossOrigin='anonymous'></script>
// 				</Head>

// 				<Navbar />
// 				<div className='home-page'>
// 					<div className='container'>
// 						{/* <button className='btn btn-dark' onClick={increment}>
// 						Increment Number
// 					</button>
// 					<button className='btn btn-dark' onClick={decrement}>
// 						Decrement Number
// 					</button> */}
// 						<div className='row'>
// 							<div className='col-lg-3'>
// 								<SideMenu appName={'Movie DB'} />
// 							</div>
// 							<div className='col-lg-9'>
// 								<Carousel />
// 								<div className='row'>
// 									{/* <p>{this.state.error}</p> */}
// 									<MovieList movies={movies} />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<Footer />
// 				<style jsx>
// 					{`
// 						.home-page {
// 							padding-top: 80px;
// 						}
// 					`}
// 				</style>
// 			</div>
// 		);
// 	}
// }

export default Home;
