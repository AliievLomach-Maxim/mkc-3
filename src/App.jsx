import { useState } from 'react'
import ControlledForm from './components/ControlledForm/ControlledForm'

const App = () => {
	const [user, setUser] = useState(null)
	const createUser = (data) => {
		setUser(data)
		console.log('data', data)
	}
	return (
		<div>
			<ControlledForm createUser={createUser} />
			<hr />
			{user && <p>newUser: {user.userName}</p>}
		</div>
	)
}

export default App
// const App = () => {
// 	const [text, setText] = useState('')
// 	const [lang, setLang] = useState('en')

// 	const handleChange = (e) => {
// 		// if (e.target.value.includes('@')) return
// 		// else
// 		setText(e.target.value)
// 	}
// 	const handleLang = (e) => {
// 		setLang(e.target.value)
// 	}

// 	return (
// 		<div>
// 			<TextInput textValue={text} changeInput={handleChange} />
// 			<p>{text}</p>
// 			<hr />
// 			<hr />
// 			<SelectLang lang={lang} handleLang={handleLang} />
// 			<p>Current Lang: {lang}</p>
// 		</div>
// 	)
// }

// export default App

// document.addEventListener('input')
// const App = () => {
// 	const [user, setUser] = useState(null)
// 	const [user2, setUser2] = useState(null)

// 	const createUser = (data) => {
// 		// role:guest
// 		const newUser = {
// 			...data,
// 			role: 'guest',
// 		}
// 		setUser(newUser)
// 	}

// 	const createUser2 = (data) => {
// 		// role:guest
// 		const newUser = {
// 			...data,
// 			role: 'Admin',
// 		}
// 		setUser2(newUser)
// 	}
// 	return (
// 		<div>
// 			<UserForm createUser={createUser} />
// 			{user && <p>{user.userName}</p>}
// 			{user && <p>{user.role}</p>}
// 			<hr />
// 			<UserForm createUser={createUser2} />
// 			{user2 && <p>{user2.userName}</p>}
// 			{user2 && <p>{user2.role}</p>}
// 		</div>
// 	)
// }

// export default App

// import { useEffect, useState } from 'react'
// import posts from '../data.json'
// import Header from './components/Header/Header'
// import Pagination from './components/Pagination/Pagination'
// import Article from './components/Article/Article'

// const initialPage = () => {
// 	const localPage = localStorage.getItem('curPage')
// 	if (localPage !== null) {
// 		return JSON.parse(localPage)
// 	}
// 	return 1
// }

// const App = () => {

// 	const [page, setPage] = useState(initialPage)

// 	const totalPages = posts.length

// 	useEffect(() => {
// 		localStorage.setItem('curPage', JSON.stringify(page))
// 	}, [page])

// 	const handleIncrementPage = () => {
// 		if (page === totalPages) {
// 			return
// 		}
// 		setPage(page + 1)
// 	}

// 	const handleDecrementPage = () => {
// 		if (page === 1) {
// 			return
// 		}
// 		setPage(page - 1)
// 	}

// 	const currentPost = posts[page - 1].body

// 	return (
// 		<div>
// 			<Header>
// 				<Pagination
// 					increment={handleIncrementPage}
// 					decrement={handleDecrementPage}
// 					currentPage={page}
// 					totalPages={totalPages}
// 				/>
// 			</Header>
// 			<Article item={currentPost} />
// 		</div>
// 	)
// }

// export default App
