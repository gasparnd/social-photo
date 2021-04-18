import React, { useState, useEffect } from 'react'

import useFetchData from '../../hooks/useFetchData'

import PhotoItem from '../../components/PhotoItem'

import './Home.css'

const Home = () => {
	const { photo, setPhoto } = useFetchData()
	const { error, setError } = useFetchData()
	const { loading, setLoading } = useFetchData()

	if(loading) {
		return 'Loading...'
	}
	if(error) {
		return {error}
	}

	return(
		<div className='content'>
			<section className="pines-container">
				{photo.results.map(item => (
					<PhotoItem key={item.id} photo={item} />
				))}
			</section>
		</div>
	)
}

export default Home