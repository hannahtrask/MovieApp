import { getMovieById } from '../../actions/index';
import { useRouter } from 'next/router';

const Movie = ({movie}) => {
	console.log(movie)
	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.releaseYear}</p>
				<hr className='my-4' />
				<p>{movie.description}</p>
				<p className='lead'>
					<a className='btn btn-primary btn-lg' href='#' role='button'>
						Learn more
					</a>
				</p>
			</div>
			<p className='desc-text'>{movie.longDesc}</p>
			<style jsx>
				{`
					.desc-text {
						font-size: 20px;
						padding-bottom: 15px;
					}
				`}
			</style>
		</div>
	);
};

Movie.getInitialProps = async ({query}) => {
	const movie = await getMovieById(query.id);
	return { movie };
};

export default Movie;
