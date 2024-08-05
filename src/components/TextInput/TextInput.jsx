const TextInput = ({ changeInput, textValue }) => {
	return <input type='text' value={textValue} onChange={changeInput} />
}

export default TextInput
