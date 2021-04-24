import React, { useEffect, useState } from 'react'

import useInitialState from '../../hooks/useInitialState'

import PhotosGrid from '../../components/PhotosGrid'
import PhotoItem from '../../components/PhotoItem'
import Loader from '../../components/Loader'

import './Profile.css'

const fetchUserData = async (setProfile, setPhotos, setLoading, setError, USER_URI, USER_PHOTOS_URI) => {
	setLoading(true)
	setError(null)

	try{
		const userResponse = await fetch(USER_URI)
		const user = await userResponse.json()
		const userPhotosResponse = await fetch(USER_PHOTOS_URI)
		const userPhotos = await userPhotosResponse.json()
		setProfile(user)
		setPhotos(userPhotos)
		setLoading(false)
	} catch(err) {
		setLoading(false)
		setError(err)
	}
}

const Profile = props => {

	const [ profile, setProfile ] = useState({})
	const [ photos, setPhotos ] = useState([])
	const { loading, setLoading, error, setError } = useInitialState()
	const { user } = props.match.params

	const USER_URI = `https://api.unsplash.com/users/${user}?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g`
	const USER_PHOTOS_URI = `https://api.unsplash.com/users/${user}/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g`

	useEffect(() => {
		fetchUserData(setProfile, setPhotos, setLoading, setError, USER_URI, USER_PHOTOS_URI)

		console.log(profile)
		console.log(photos)
	}, [])

	if(loading) {
		return( <Loader />)
	}

	if(error) {
		return `Error: ${error}`
	}

	return(
		<div className="profilePage">
			<section className="profilePage__profile">
				<div className="profilePage__profile--about">
					<img className="profilePage__profile--about-image" src={profile.profile_image.large} alt={profile.name} />
					<div className="profilePage__profile--about-manes">
						<h1 className="profilePage__profile--about-fullname">{profile.name}</h1>
						<p className="profilePage__profile--about-username">{`@${profile.username}`}</p>
					</div>
					<p className="profilePage__profile--about-bio">{profile.bio}</p>
					<div className="profilePage__profile--about-info">
						<span className="profilePage__profile--about-numbers">{`${profile.total_photos} pictures`}</span>
						<span className="profilePage__profile--about-numbers">{`${profile.followers_count} followers`}</span>
					</div>
					<a target="_blak" href={`https://unsplash.com/${profile.username}`} 
						className="profilePage__profile--about-unsplashprofile" 
					>
						Unsplash profile
					</a>
				</div>
			</section>
			<div>
				<PhotosGrid>
					{photos.map((ph) => (
						<PhotoItem isProfile key={ph.id} photo={ph} />
					))}
				</PhotosGrid>
			</div>
		</div>	
	)	
}

export default Profile