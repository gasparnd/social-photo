import React from 'react'
import { Link } from 'react-router-dom'

import './Error.css'

const Error404 = () => (
	<div className="Error">
		<div className="Error-wrapper">
			<span className="Error__span--draw">
				[?_?]
			</span>
			<span className="Error__span--message">
				Sorry, page not found
			</span>
			<div className="Error__link">
				<Link className="Error__link--link" to="/">GO Home</Link>
			</div>
		</div>
	</div>
)

export default Error404