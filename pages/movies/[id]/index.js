import { getMovieById, deleteMovie } from '../../../actions/index';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Movie = ({ movie }) => {
	const router = useRouter();
	const id = router.query.id;

	const handleDeleteMovie = (id) => {
		deleteMovie(id).then(() => {});
		router.push('/');
	};

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.releaseYear}</p>
				<hr className='my-4' />
				<p>{movie.description}</p>
				<br />
				<p>{movie.genre}</p>
				<p className='lead'>
					<button
						onClick={() => handleDeleteMovie(id)}
						className='btn btn-danger btn-lg mr-1'
						href='#'
						role='button'>
						delete movie from list
					</button>
					<Link href='/movies/[id]/edit' as={`/movies/${id}/edit`}>
						<button
							className='btn btn-warning btn-lg mr-1'
							href='#'
							role='button'>
							edit movie
						</button>
					</Link>
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

Movie.getInitialProps = async ({ query }) => {
	const movie = await getMovieById(query.id);
	return { movie };
};

export default Movie;
