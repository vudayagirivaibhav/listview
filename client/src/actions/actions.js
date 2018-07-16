export const searchLabels = ( searchString, numResult ) => (
	fetch(`/search?searchString=${searchString}&numResult=${numResult}`, {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
)
