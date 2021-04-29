import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal.jsx'

import './PhotoDetailsModal.css'

const PhotoDetailsModal = ({ isOpen, handleClose, data}) => {
	return(
		<Modal 
			isOpen={ isOpen } 
			handleClose={ handleClose } 
		>
			<div className="PhotoContainer">
				<section className="PhotoContainer__info">
					<p><strong>Description:</strong> {data.alt_description}</p>
					<Link className="profile-link" to={`/${data.user.username}`}>
						<div className="pin-user">
							<p>{data.user.username}</p>
							<img src={data.user.profile_image.small} width="25" height="25" alt={`${data.user.username}'s profile`} />
						</div>
					</Link>
				</section>
				<section className="PhotoContainer__photo">
					<img src={data.urls.regular} alt={data.alt_description} />
				</section>
			</div>
		</Modal>
	)
}

export default PhotoDetailsModal