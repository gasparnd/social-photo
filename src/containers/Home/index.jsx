import React, { useState, useEffect } from 'react'

import useInitialState from '../../hooks/useInitialState'

import PhotoItem from '../../components/PhotoItem'
import PhotosGrid from '../../components/PhotosGrid'
import Loader from '../../components/Loader'
import ErrorPage from '../../components/Errors/ErrorPage'

const Home = props => {
	const { photo, setPhoto } = useInitialState()
	const { error, setError } = useInitialState()
	const { loading, setLoading } = useInitialState()

	
	useEffect(() => {
		const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1`
		fetch(API)
			.then(response => response.json())
			.then(data => {
				setPhoto({results: data})
				setLoading(false)
			})
			.catch(err => {
				setError(err)
				setLoading(false)
			})
	}, []) 
	
	if(loading) {
		return (<Loader />)
	}
	if(error) {
		return( <ErrorPage error={error} />)
	}

	return(
		<div className='content'>
			<PhotosGrid>
				{photo.results.map( item => (
					<PhotoItem key={item.id} photo={item} />
				))}
			</PhotosGrid>
		</div>
	)
}

export default Home