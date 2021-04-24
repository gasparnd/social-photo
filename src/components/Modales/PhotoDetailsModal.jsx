import React from 'react'
import Modal from './Modal.jsx'

import './PhotoDetailsModal.css'

const PhotoDetailsModal = ({ isOpen, handleClose, data}) => {
	return(
		<Modal 
			isOpen={ isOpen } 
			handleClose={ handleClose } 
		>
			<div className="PhotoContainer">
				<section className="PhotoContainer__photo">
					<img src={data.urls.regular} />
				</section>
			</div>
		</Modal>
	)
}

export default PhotoDetailsModal