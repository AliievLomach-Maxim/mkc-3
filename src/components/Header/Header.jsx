import Navigation from '../Navigation/Navigation'
import SwitchLang from '../SwitchLang/SwitchLang'

const Header = () => {
	return (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
			<Navigation />
			<SwitchLang />
		</div>
	)
}

export default Header
