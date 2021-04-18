import React, { useEffect, useState } from 'react'


const Profile = props => {


	return(
		<div className="profilePage">
			<section className="profilePage__profile">
				<img />
				<div className="profilePage__profile--about">
					<h1 className="profilePage__profile--about-fullname"></h1>
					<p className="profilePage__profile--about-username"></p>
					<span className="profilePage__profile--about-numbers">Pictures</span>
					<span className="profilePage__profile--about-numbers">Followers</span>
				</div>
			</section>
			<section className="profilePage__feed">
				<section className="pines-container">
					
				</section>
			</section>
		</div>	
	)	
}

export default Profile