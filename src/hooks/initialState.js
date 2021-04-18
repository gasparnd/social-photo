import { useState } from 'react'

const initialState = () => {
	const [ photo, setPhoto ] = useState({
		query: '',
		dataResponse: {}
	})
	const [ error, setError ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	return { photo, setPhoto, error, setError, loading, setLoading }
}

export default initialState