import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

const Modal = ({ isOpen, children, handleClose}) => {
	if(!isOpen) {
		return null
	}

	if(isOpen) {
		return(
			ReactDOM.createPortal(
				<div className="Modal">
					<div className="Modal__container">
						<button onClick={ handleClose } type="button" className="Modal__close-button">X</button>
						{children}
					</div>
				</div>,
				document.getElementById('modal')
			)
		)
	}
}

export default Modal