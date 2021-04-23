import React from 'react'
import Modal from './Modal.jsx'

const PhotoDetailsModal = ({ isOpen, handleClose, data}) => {
	return(
		<Modal 
			isOpen={ isOpen } 
			handleClose={ handleClose } 
		>
			{data.user.name}
		</Modal>
	)
}

export default PhotoDetailsModal