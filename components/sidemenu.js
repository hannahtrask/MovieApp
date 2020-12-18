import React from 'react';

const SideMenu = (props) => {
	return (
		<>
            <button onClick={props.clickHandler}>Click Me!</button>
			<h1 className='my-4'>{props.appName}</h1>
			<div className='list-group'>
				<a href='#' className='list-group-item'>
					Category 1
				</a>
				<a href='#' className='list-group-item'>
					Category 2
				</a>
				<a href='#' className='list-group-item'>
					Category 3
				</a>
			</div>
			<div>
				<h1>{props.count}</h1>
			</div>
		</>
	);
};

export default SideMenu;
