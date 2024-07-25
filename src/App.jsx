// import data from '../data.json'
// import data2 from '../data2.json'
// import CommentList from './components/CommentList'
import styles from './App.module.css'
import clsx from 'clsx'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import reactIcon from './assets/react.svg'
//
//
//
import { AiFillAmazonCircle } from 'react-icons/ai'
import { MdAddCircleOutline } from 'react-icons/md'

const ifOnline = true
// console.log(
// 	clsx('a', ifOnline ? 'b' : 'c', {
// 		d: ifOnline,
// 	})
// )

//
function App() {
	return (
		<>
			<div
				className={clsx(
					styles.container,
					ifOnline ? styles.online : styles.offline
				)}
			>
				<h1>Hello React</h1>
			</div>
			<AiFillAmazonCircle className={styles.icon} />
			<MdAddCircleOutline className={styles.icon} />
			<img src={reactIcon} alt='' className={styles.icon} />
			<Button severity='primary' size='md'>
				Click me
			</Button>
			<Button severity='secondary' size='sm'>
				click
			</Button>

			<Card bgSeverity='primary' footerContent='subscription' date={new Date()}>
				<div>
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<Button>Click</Button>
				</div>
			</Card>
			<Card bgSeverity='secondary'>
				<div>
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<Button>Click</Button>
					<Button>Click</Button>
					<Button>Click</Button>
				</div>
			</Card>
			{/* <CommentList  data={data} />
			<hr />
			<hr />
			<hr />
			<CommentList data={data2} /> */}
		</>
	)
}

export default App
