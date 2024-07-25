import clsx from 'clsx'
import styles from './Card.module.css'

const Card = ({ children, bgSeverity, footerContent, date }) => {
	const classNamesCard = clsx(
		styles.card,
		bgSeverity === 'primary' ? styles.primary : styles.secondary
	)
	const user = {
		name: 'Alex',
		isOnline: true,
	}
	return (
		<div className={classNamesCard}>
			<div className={styles.header}>
				{date && <div className={styles.date}>{date.toLocaleDateString()}</div>}
				Header
			</div>
			<hr />
			<div className={styles.content}>{children}</div>
			{footerContent && (
				<>
					<hr />
					<footer className={styles.footer}>{footerContent}</footer>
				</>
			)}
		</div>
	)
}

export default Card
