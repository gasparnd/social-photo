export const SearchTopicUrl = str => {
	const lowerCase = str.toLowerCase()
	const outSpaces = lowerCase.replace(/\s/g, '-')
	return outSpaces
}

export const lowerCase = str => str.toLowerCase()