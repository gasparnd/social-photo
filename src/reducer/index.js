const reducer = (state, action) => {
	switch(action.type){
		case 'PRINCIPAL_STATE':
			const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&per_page=30&page=1`
			return{
				...state,
				principalFeed: ['Test']
				
			}
		default:
			return state
	}
}

export default reducer