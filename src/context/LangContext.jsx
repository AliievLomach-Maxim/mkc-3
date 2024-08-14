import { useState } from 'react'
import { langContext } from './constext'

const LangProvider = ({ children }) => {
	const [lang, setLang] = useState('en')
	return (
		<langContext.Provider value={{ lang, setLang }}>
			{children}
		</langContext.Provider>
	)
}
export default LangProvider
