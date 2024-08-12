import { useEffect, useState } from 'react'
import { fetchNews } from './api/api-news'
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
	const [data, setData] = useState([])
	const [page, setPage] = useState(1)
	const [searchQuery, setSearchQuery] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const handleSearch = async (searchQuery) => {
		setSearchQuery(searchQuery)
		setPage(1)
		setData([])
	}

	useEffect(() => {
		if (!searchQuery) return

		const fetchData = async () => {
			try {
				setIsLoading(true)
				setError(false)
				const data = await fetchNews(searchQuery, page)

				setData((prevData) => {
					return [...prevData, ...data]
				})
			} catch (error) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [page, searchQuery])

	const handlePage = () => {
		setPage(page + 1)
	}

	return (
		<div>
			<SearchForm onSearch={handleSearch} />
			{error && <p>oops!! some error...</p>}
			{data.length > 0 && (
				<ul>
					{data.map((el) => (
						<li key={el.objectID}>
							<a href={el.url}>{el.title}</a>
						</li>
					))}
				</ul>
			)}
			{isLoading && <p>Loading...</p>}
			{data.length > 0 && <button onClick={handlePage}>Load more...</button>}
		</div>
	)
}

export default App

// useEffect(() => {
// 	const getData = async () => {
// 		const data = await fetchNews()
// 		setData(data)
// 	}
// 	getData()
// }, [])
