import { getMovieById } from '../../actions/index';
import { useRouter } from 'next/router';

const Movie = (props) => {
	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{}</h1>
				<p className='lead'>{}</p>
				<hr className='my-4' />
				<p>{}</p>
				<p className='lead'>
					<a className='btn btn-primary btn-lg' href='#' role='button'>
						Learn more
					</a>
				</p>
			</div>
			<p className='desc-text'>{}</p>
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

// Movie.getInitialProps = async () => {
// 	// const movie = await getMovieById(query.id);
// 	// return { movie };
// };

export default Movie;
