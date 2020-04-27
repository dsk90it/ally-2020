const getOkrs = async () => {
	const response = await fetch(
		'https://okrcentral.github.io/sample-okrs/db.json'
	)

	if (response.status === 200) {
		const result = await response.json()
		const data = result.data

		// Destructure Data
		const parent = data.filter((item) => !item.parent_objective_id)
		const children = data.filter((item) => item.parent_objective_id)
		const matchSubitems = (id) =>
			children.filter((item) => item.parent_objective_id === id)

		parent.forEach((item) => {
			const getSubitems = matchSubitems(item.id)
			item.subitems = [...getSubitems]
		})

		return parent
	} else {
		throw new Error('Unable to get data')
	}
}

export { getOkrs as default }
