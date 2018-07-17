export const searchLabels = ( text, page, resultsPerPage ) => (
	fetch(`/search?text=${text}&page=${page}&resultsPerPage=${resultsPerPage}`, {
		method: 'get',
	}).then(res => res.json())
)
