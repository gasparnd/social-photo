import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { queryResults } from '../../actions'

import './Header.css'

const Header = props => {

	const [ search, setSearch ] = useState('')

	const handleClick = e => {
		console.log('click')

		const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1&query=${search}`
		console.log(APISEARCH)
		fetch(APISEARCH)
			.then(response => response.json())
			.then(data => {
				props.queryResults({data})
			})
	}

	const handleChange = e => {
		setSearch(e.target.value)
	}

	return(
		<div className="header-wraper">
			<Link to="/" className="home-item">
				<p>Home</p>
			</Link>
			<div className="search">
				<div className="search-ico">
					<i className="icon-search"></i>
				</div>
				<input onChange={ handleChange } className="search-input" type="text" placeholder="Try Cats"></input>
				<button onClick={ handleClick } id="search-btn">Search</button>
			</div>
			<div className="header-right">
				<div className="header-ico">
					<i className="icon-bell"></i>
				</div>
				<div className="header-ico">
					<i className="icon-message"></i>
				</div>
				<a href="https://gasparnd.github.io/" target="_blak" className="profile">
					<img src="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" alt="Profile" />
				</a>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	queryResults,
}

export default connect(null, mapDispatchToProps)(Header)