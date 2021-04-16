import React from 'react'

import './PhotoItem.css'

const PhotoItem = props => {
	return(
		<article className="pin">
			<img src="${photo.urls.regular}" width="400" height="300" alt="${photo.alt_description}" />
			<div className="pin-options">
				<div className="download-pin">
					<a target="_blank" href="${photo.links.download}">Download</a>
				</div>
				<div className="pin-user">
					<p>${photo.user.username}</p>
					<img src="${photo.user.profile_image.small}" width="25" height="25" alt="${photo.user.username}'s profile image" />
				</div>
			</div>	
		</article>
	)
}

export default PhotoItem