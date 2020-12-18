import React from 'react';

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

	// use THIS keyword to call in render function, this just refers to the self, similar to python

	render() {
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
                <h1>{this.props.count}</h1>
				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item One</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Two</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur! Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Three</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Four</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Five</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur! Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Six</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default MovieList;
