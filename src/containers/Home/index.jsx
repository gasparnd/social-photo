import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import useInitialState from '../../hooks/useInitialState'

import PhotoItem from '../../components/PhotoItem'
import PhotosGrid from '../../components/PhotosGrid'

import './Home.css'

const Home = props => {
	const { photo, setPhoto } = useInitialState()
	const { error, setError } = useInitialState()
	const { loading, setLoading } = useInitialState()
	const { queryResults } = props

	const hasResults = Object.keys(queryResults).length > 0

	const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1`
	//const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1&query=${photo.query}`
	
	useEffect(() => {
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
		return 'Loading...'
	}
	if(error) {
		return {error}
	}

	return(
		<div className='content'>
			<PhotosGrid>
				{hasResults ? 
					queryResults.data.results.map(item => (
						<PhotoItem key={item.id} photo={item} />
					))
					:
					photo.results.map(item => (
						<PhotoItem key={item.id} photo={item} />
					))
				}
			</PhotosGrid>
		</div>
	)
}

const mapStateToProps = state => {
	return{	
		queryResults: state.queryResults
	}
}

export default connect(mapStateToProps, null)(Home)