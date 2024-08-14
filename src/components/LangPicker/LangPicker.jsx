import { useContext } from 'react'
import { langContext } from '../../context/constext'

const LangPicker = () => {
	// const { lang, setLang } = useLangContext()
	const { lang, setLang } = useContext(langContext)

	return (
		<select value={lang} onChange={({ target: { value } }) => setLang(value)}>
			<option value='en'>En</option>
			<option value='ua'>Ua</option>
			<option value='fr'>Fr</option>
		</select>
	)
}

export default LangPicker
