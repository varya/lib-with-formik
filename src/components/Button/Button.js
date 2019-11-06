import React from 'react';
// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.


// Components are functions, and they must start with a capital letter
function Button(props) {
	// {...props} uses the the ES6 spread operator to send any props you may pass
	// along without changing any of the contents. This is basically just creating
	// a copy to pass along
	return (
		<div>Hello world</div>
	);
}

// This export will be picked up in ./index.js
export default Button;
