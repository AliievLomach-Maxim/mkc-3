import { useEffect, useMemo, useState } from 'react'
import { fetchPosts } from '../../api/postsApi'
import PostList from '../../components/PostList/PostList'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'
import { useSearchParams } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'

const PostsPage = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const [params] = useSearchParams()

	const filterValue = params.get('filter') ?? ''

	useEffect(() => {
		const getPost = async () => {
			setIsLoading(true)
			setError(false)
			try {
				const data = await fetchPosts()
				setPosts(data)
			} catch (error) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getPost()
	}, [])

	const filteredPosts = useMemo(
		() =>
			posts.filter((el) =>
				el.title.toLowerCase().includes(filterValue.toLowerCase())
			),
		[filterValue, posts]
	)

	return (
		<div>
			{isLoading && <Loading />}
			{error && <Error />}
			<Filter />
			{filteredPosts.length > 0 && <PostList posts={filteredPosts} />}
		</div>
	)
}

export default PostsPage
