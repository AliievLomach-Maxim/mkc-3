import { useEffect, useState } from 'react'
import { fetchPosts } from '../../api/postsApi'
import PostList from '../../components/PostList/PostList'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'

const PostsPage = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

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

	return (
		<div>
			{isLoading && <Loading />}
			{error && <Error />}
			{posts.length > 0 && <PostList posts={posts} />}
		</div>
	)
}

export default PostsPage
