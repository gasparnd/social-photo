import { useState, useEffect } from 'react'

const CLIENT_ID = 'OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g'
const pageNum = 1

const useFetchData = query => {

	const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=${pageNum}`
	const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1&query=${query}`
	
	const [ photo, setPhoto ] = useState({
		results: []
	})
	const [ error, setError ] = useState(null)

	useEffect(() => {
		if(query) {
			fetch(APISEARCH)
				.then(response => response.json())
				.then(data => {
					setPhoto({results: data})
				})
				.catch(err => setError(err))
		}
		fetch(API)
			.then(response => response.json())
			.then(data => {
				setPhoto({results: data})
			})
			.catch(err => setError(err))
	}, []) 

	return { photo, error } 
}

export default useFetchData