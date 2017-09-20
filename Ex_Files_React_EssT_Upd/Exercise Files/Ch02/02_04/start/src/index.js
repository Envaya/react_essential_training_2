const { render } = ReactDOM

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello how are you!
	</h1>,
	document.getElementById('react-container')
)


// import React from 'react'
// import { render } from 'react-dom'
// import { hello, goodbye } from './lib'


// render(
// 	<div>
// 		{hello}
// 		{goodbye}
// 	</div>,
// 	document.getElementById('react-container')
// )