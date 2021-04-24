import React from 'react'
import { Link } from 'react-router-dom'

import './Error.css'

const ErrorPage = ({ error }) => (
	<div className="Error">
		<div className="Error-wrapper">
			<span className="Error__span--draw">
				[X_X]
			</span>
			{ error ?
				<span className="Error__span--message">
					Sorry, we have a problem: { error }
				</span>
				:
				<span className="Error__span--message">
					Sorry, we have a problem
				</span>
			}
			<div className="Error__link">
				<Link className="Error404__link--link" to="/">GO Home</Link>
			</div>
		</div>
	</div>
)

export default ErrorPage