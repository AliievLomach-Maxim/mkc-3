import { Route, Routes } from 'react-router-dom'

// import HomePage from './pages/HomePage/HomePage'
// import PostsPage from './pages/PostsPage/PostsPage'
// import PostDetails from './pages/PostDetails/PostDetails'
// import Owner from './components/Owner/Owner'
import { lazy, Suspense } from 'react'
import BalancePage from './pages/BalancePage/BalancePage'
import Header from './components/Header/Header'
import TodoPage from './pages/TodoPage/TodoPage'
import { Toaster } from 'react-hot-toast'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const PostsPage = lazy(() => import('./pages/PostsPage/PostsPage'))
const PostDetails = lazy(() => import('./pages/PostDetails/PostDetails'))
const Owner = lazy(() => import('./components/Owner/Owner'))

const App = () => {
	return (
		<div>
			<Toaster />
			<Header />
			<Suspense fallback={<div>!!!!!!!!!!!!!!!LOADING!!!!!...</div>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/balance' element={<BalancePage />} />
					<Route path='/todo' element={<TodoPage />} />
					<Route path='/posts' element={<PostsPage />} />
					<Route path='/post/:id' element={<PostDetails />}>
						<Route path='reactions' element={<div>reactions</div>} />
						<Route path='owner/:ownerId' element={<Owner />} />
					</Route>
					<Route path='*' element={<div>404</div>} />
					<Route path='/404' element={<div>404</div>} />
				</Routes>
			</Suspense>
			<br />
			<footer>footer</footer>
		</div>
	)
}

export default App
