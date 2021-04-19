export const principalFeed = payload => ({
	type: 'PRINCIPAL_FEED',
	payload,
})

export const queryResults = payload => ({
	type: 'QUERY_RESULTS',
	payload,
})