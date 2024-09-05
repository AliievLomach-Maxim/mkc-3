import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectSearch } from '../../store/filterSlice'

const FilterForm = () => {
	const dispatch = useDispatch()
	const filterValue = useSelector(selectSearch)

	const handleChange = ({ target: { value } }) => {
		dispatch(changeFilter(value))
	}
	return <input type='text' value={filterValue} onChange={handleChange} />
}

export default FilterForm
