export const searchLabels = ( searchString, page, resultsPerPage ) => (
	fetch(`/search?searchString=${searchString}&page=${page}&resultsPerPage=${resultsPerPage}`, {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
)
