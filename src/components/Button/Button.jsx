import clsx from 'clsx'
import styles from './Button.module.css'

const Button = ({ severity, size, children }) => {
	return (
		<button
			className={clsx(
				severity === 'primary' ? styles.primary : styles.secondary,
				{ [styles[size]]: size }
			)}
		>
			{children}
		</button>
	)
}

export default Button
