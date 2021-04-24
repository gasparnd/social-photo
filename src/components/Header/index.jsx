import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchTopicUrl, lowerCase } from '../../utils/cleanSearchUrl'

import './Header.css'

const Header = props => {

	const [ search, setSearch ] = useState('')

	const handleChange = e => {
		setSearch(e.target.value)
	}

	return(
		<div className="header">
			<Link to="/" className="home-item">
				<p>Home</p>
			</Link>
			<div className="search-wrapper">
				<div className="search">
					<input onChange={ handleChange } className="search-input" type="text" placeholder="Try Cats"></input>
				</div>
				{search && 
					<div className="search__result">
						<a className="search__results--result" 
							href={ `/search/${SearchTopicUrl(search)}` }>
							{`Search photos of "${search}"`}
						</a>
						<a className="search__results--result" 
							href={`/${lowerCase(search)}`}>{`Search "@${search}"`}
						</a>
					</div>
				}
			</div>
			<div className="header-right">
				<a href="https://gasparnd.github.io/" target="_blak" className="profile">
					<img src="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" alt="Profile" />
				</a>
			</div>
		</div>
	)
}

export default Header