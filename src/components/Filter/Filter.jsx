import { useSearchParams } from 'react-router-dom'

const Filter = () => {
	const [params, setParams] = useSearchParams()

	const filterValue = params.get('filter') ?? ''

	const handleChangeFilter = (newFilter) => {
		// params.append('filter', newFilter)
		if (!newFilter) {
			return setParams({})
		}
		params.set('filter', newFilter)
		setParams(params)
	}
	return (
		<input
			type='text'
			value={filterValue}
			onChange={({ target: { value } }) => handleChangeFilter(value)}
		/>
	)
}

export default Filter
