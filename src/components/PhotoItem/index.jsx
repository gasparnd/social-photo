import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PhotoDetailsModal from '../Modales/PhotoDetailsModal'

import './PhotoItem.css'

const PhotoItem = props => {
	const [ modal, setModal ] = useState({
		isOpen: false
	})

	const { photo, isProfile } = props

	const profileLinkClass = classNames('profile-link', {
		isProfile,
	})

	const handleClose = ev => {
		setModal({isOpen: false})
	}

	return(
		<>
			<article className="pin" onClick={ () => setModal({isOpen: true}) }>
				<img src={photo.urls.regular} width="400" height="300" alt={photo.alt_description} />
				<div className="pin-options">
					<div className="download-pin">
						<a target="_blak" href={photo.links.download}>Download</a>
					</div>
					<Link className={ profileLinkClass } to={`/${photo.user.username}`}>
						<div className="pin-user">
							<p>{photo.user.username}</p>
							<img src={photo.user.profile_image.small} width="25" height="25" alt={`${photo.user.username}'s profile`} />
						</div>
					</Link>
				</div>	
			</article>
			<PhotoDetailsModal 
				isOpen={ modal.isOpen } 
				handleClose={ handleClose } 
				data={ photo } 
			/>
		</>
	)
}

export default PhotoItem