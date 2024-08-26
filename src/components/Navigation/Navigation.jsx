import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'
// import './Navigation.css'

const generateClassNames = ({ isActive }) => {
	return clsx(isActive && css.isActive)
}

const Navigation = () => {
	return (
		<nav>
			<ul className={css.list}>
				<li>
					<NavLink className={generateClassNames} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={generateClassNames} to='/balance'>
						Balance
					</NavLink>
				</li>
				<li>
					<NavLink className={generateClassNames} to='/posts'>
						Posts
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
