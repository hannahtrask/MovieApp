import React from 'react';
// FUNCTIONAL COMPONENTS ARE FOR:
// SMALLER COMPONENTS
// REUSABLE COMPONENTS
// PRESENTATIONAL COMPONENTS , partially right, we have HOOKS and specify state


// const About = () => {
// 	const msg = 'Hello World';
// 	return (
// 		// first: what you want to create
// 		// second: props
// 		// third: content
// 		React.createElement(
// 			'h1',
// 			null,
// 			'I am creating this h1 with React.createElement'
// 		)
// 	);
// };

// // functional component - arrow function
// const About = () => {
//     const msg = 'Hello World'
//     return (
//         <h1>about page - {msg}</h1>
//     )
// }

// class component
class About extends React.Component {
	// this function is necessary in a class component
	render() {
		return <h1>about page class component style</h1>;
	}
}

export default About;
