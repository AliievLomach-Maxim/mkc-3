import { useState } from 'react'
import posts from '../data.json'
import Header from './components/Header/Header'
import Pagination from './components/Pagination/Pagination'
import Article from './components/Article/Article'
import Button from './components/Button/Button'

const App = () => {
	const [page, setPage] = useState(1)
	const [isShowArticle, setIsShowArticle] = useState(false)
	const handleChangeShowArticle = () => {
		setIsShowArticle(!isShowArticle)
	}
	const totalPages = posts.length

	const handleIncrementPage = () => {
		if (page === totalPages) {
			return
		}
		setPage(page + 1)
	}

	const handleDecrementPage = () => {
		if (page === 1) {
			return
		}
		setPage(page - 1)
	}

	const currentPost = posts[page - 1].body

	return (
		<div>
			<Header>
				<Pagination
					increment={handleIncrementPage}
					decrement={handleDecrementPage}
					currentPage={page}
					totalPages={totalPages}
				/>
			</Header>
			<Button onClick={handleChangeShowArticle}>toggle</Button>
			{isShowArticle && <Article item={currentPost} />}
			<Article item={currentPost} />
		</div>
	)
}

export default App
//
// import { useState } from 'react'

// // let counter = 0
// // counter++

// // const ClickerButton = () => {
// // 	const [counter, setCounter] = useState(0)
// // 	const handleClick = () => {
// // 		setCounter(counter + 1)
// // 		console.log('counter', counter)
// // 	}
// // 	return <button onClick={handleClick}>Click: {counter}</button>
// // }
// const ClickerButton = ({ value, handleClick }) => {
// 	// const onClick = () => {
// 	// 	console.log('type', type)
// 	// 	handleClick()
// 	// }
// 	return <button onClick={handleClick}>Click: {value}</button>
// }

// const App = () => {
// 	const [counter, setCounter] = useState({
// 		a: 0,
// 		b: 0,
// 	})

// 	// console.log('counter', counter)

// 	// const handleClick = () => {
// 	// 	// counter++
// 	// 	// counter+=1
// 	// 	// counter = counter + 1
// 	// 	setCounter(counter + 1)
// 	// 	console.log('counter', counter)
// 	// }
// 	const handleClick = (key) => {
// 		setCounter({
// 			...counter,
// 			[key]: counter[key] + 1,
// 		})
// 	}
// 	// const handleClickA = () => {
// 	// 	setCounter({
// 	// 		...counter,
// 	// 		a: counter.a + 1,
// 	// 	})
// 	// }
// 	// const handleClickB = () => {
// 	// 	setCounter({
// 	// 		...counter,
// 	// 		b: counter.b + 1,
// 	// 	})
// 	// }

// 	return (
// 		<div>
// 			{/* <button onClick={() => handleClick('someId')}>click</button> */}
// 			<ClickerButton
// 				value={counter.a}
// 				handleClick={() => handleClick('a')}
// 			></ClickerButton>
// 			<hr />
// 			<h3>{counter.a + counter.b}</h3>
// 			<hr />

// 			<ClickerButton
// 				value={counter.b}
// 				handleClick={() => handleClick('b')}
// 			></ClickerButton>

// 			{/* <button onClick={handleClick2}>Click: {counter2}</button> */}
// 		</div>
// 	)
// }

// export default App
