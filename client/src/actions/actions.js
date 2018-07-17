export const searchLabels = ( searchString, page, resultsPerPage ) => (
	fetch(`/search?searchString=${searchString}&page=${page}&resultsPerPage=${resultsPerPage}`, {
		method: 'get',
	}).then(res => res.json())
)
