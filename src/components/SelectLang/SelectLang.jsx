const SelectLang = ({ lang, handleLang }) => {
	return (
		<select value={lang} onChange={handleLang}>
			<option value='en'>EN</option>
			<option value='ua'>UA</option>
		</select>
	)
}

export default SelectLang
