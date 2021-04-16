import React from 'react'

import './Header.css'

const Header = props => {
	return(
		<div className="header-wraper">
			<a href="https://photography-library.gasparnd.vercel.app/" className="home-item">
				<p>Home</p>
			</a>
			<div className="search">
				<div className="search-ico">
					<i className="icon-search"></i>
				</div>
				<input className="search-input" type="text" placeholder="Try Cats"></input>
				<button id="search-btn">Search</button>
			</div>
			<div className="header-right">
				<div className="header-ico">
					<i className="icon-bell"></i>
				</div>
				<div className="header-ico">
					<i className="icon-message"></i>
				</div>
				<a href="https://gasparnd.github.io/" target="_blank" className="profile">
					<img src="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" alt="Profile Image" />
				</a>
			</div>
		</div>
	)
}

export default Header