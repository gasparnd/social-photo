import { useState, useEffect } from 'react'

const CLIENT_ID = 'OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g'
const pageNum = 1

const useFetchData = () => {


	const [ photo, setPhoto ] = useState({
		query: '',
		results: []
	})
	const [ error, setError ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1`
	//const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1&query=${photo.query}`
	useEffect(() => {
		console.log('query home '+photo.query)
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
	}, photo) 

	return { photo, setPhoto, error, setError, loading, setLoading } 
}

export default useFetchData