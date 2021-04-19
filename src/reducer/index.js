const reducer = (state, action) => {
	switch(action.type){
		case 'QUERY_RESULTS':
			console.log(action.payload)
			return{
				...state,
				queryResults: action.payload
				
			}
		default:
			return state
	}
}

export default reducer