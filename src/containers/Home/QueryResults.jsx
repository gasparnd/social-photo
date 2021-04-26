import React, { useEffect } from 'react'

import useInitialState from '../../hooks/useInitialState'

import PhotoItem from '../../components/PhotoItem'
import PhotosGrid from '../../components/PhotosGrid'
import Loader from '../../components/Loader'
import ErrorPage from '../../components/Errors/ErrorPage'

const QueryResults = props => {
	const { photo, setPhoto } = useInitialState()
	const { error, setError } = useInitialState()
	const { loading, setLoading } = useInitialState()
	const { query } = props.match.params

	
	useEffect(() => {
		const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1&query=${query}`
		setLoading(true)
		setError(null)
		fetch(APISEARCH)
			.then(response => response.json())
			.then(data => {
				setPhoto(data)
				setLoading(false)
			})
			.catch(err => {
				setError(err)
				setLoading(false)
			})
	}, [setError, setPhoto, setLoading, query]) 
	
	if(loading) {
		return( <Loader />)
	}
	if(error) {
		return( <ErrorPage error={error} />)
	}

	return(
		<div className='content'>
			<PhotosGrid>
				{photo.results.map(item => (
					<PhotoItem key={item.id} photo={item} />
				))}
			</PhotosGrid>
		</div>
	)
}

export default QueryResults