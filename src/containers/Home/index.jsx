import React from 'react'

import useFetchData from '../../hooks/useFetchData'

import PhotoItem from '../../components/PhotoItem'

import './Home.css'

const Home = () => {
	const { photo, error } = useFetchData()
	console.log(useFetchData)
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