import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../store/localSlice'

const SwitchLang = () => {
	const lang = useSelector((state) => state.local.lang)
	const dispatch = useDispatch()

	const handleChange = ({ target: { value } }) => {
		dispatch(changeLang(value))
	}

	return (
		<div>
			<select value={lang} onChange={handleChange}>
				<option value='ua'>UA</option>
				<option value='fr'>FR</option>
				<option value='en'>EN</option>
			</select>
		</div>
	)
}

export default SwitchLang
