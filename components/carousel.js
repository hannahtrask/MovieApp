import React from 'react';

const Carousel = ({ images }) => {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide my-4'
			data-ride='carousel'>
			<ol className='carousel-indicators'>
				{images.map((img, index) => (
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to={index}
						className={index === 0 ? 'active' : ''}></li>
				))}
			</ol>

			<div className='carousel-inner' role='listbox'>
				{images.map((img, index) => (
					<div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={img.index} >
						<img className='d-block img-fluid' src={img.image} alt={img.name} />
					</div>
				))}
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
			<style jsx>{`
				.d-block {
					max-height: 500px;
					margin: 0 auto;
					border-radius: 5px;
				}
			`}</style>
		</div>
	);
};

export default Carousel;
