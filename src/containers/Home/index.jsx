import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import useFetchData from '../../hooks/useFetchData'
import { principalFeed } from '../../actions'

import PhotoItem from '../../components/PhotoItem'

import './Home.css'

const Home = props => {
	/*const { photo, setPhoto } = useFetchData()
	const { error, setError } = useFetchData()
	const { loading, setLoading } = useFetchData()*/
	const { principalFeed } = props

	/*if(loading) {
		return 'Loading...'
	}
	if(error) {
		return {error}
	}*/

	return(
		<div className='content'>
			<section className="pines-container">
				{principalFeed.map(item => (
					<PhotoItem key={item.id} photo={item} />
				))}
			</section>
		</div>
	)
}

const mapStateToProps = state => {
	principalFeed: state.principalFeed
}

const mapDispatchToProps = {
	principalFeed,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)