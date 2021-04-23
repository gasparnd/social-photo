import { useState } from 'react'

//const CLIENT_ID = 'OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g'

const useInitialState = () => {

	const [ photo, setPhoto ] = useState({
		results: []
	})
	const [ error, setError ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	return { photo, setPhoto, error, setError, loading, setLoading } 
}

export default useInitialState