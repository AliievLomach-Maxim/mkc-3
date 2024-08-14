import { useContext } from 'react'
import { langContext } from '../../context/constext'

const MainContainer = () => {
	// const { lang } = useLangContext()
	const { lang } = useContext(langContext)
	return (
		<div>
			<p>Current: {lang}</p>
		</div>
	)
}

export default MainContainer
