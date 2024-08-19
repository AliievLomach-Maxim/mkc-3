import { Link, Outlet, useParams } from 'react-router-dom'
import { fetchPost } from '../../api/postsApi'
import { useEffect, useState } from 'react'

const PostDetails = () => {
	const { id } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		const getPost = async () => {
			try {
				const data = await fetchPost(id)
				setPost(data)
			} catch (error) {
				console.log('error', error)
			}
		}
		id && getPost()
	}, [id])

	return (
		post && (
			<div>
				Details
				<li>ID:{post.id}</li>
				<li>Title:{post.title}</li>
				<li>Description:{post.body}</li>
				<li>Views:{post.views}</li>
				<li>
					Tags:
					{post.tags.map((el) => (
						<span key={el}>{el} </span>
					))}
				</li>
				<Link to='reactions'> Reactions</Link>
				<Link to={`owner/${post.userId}`}> Owner</Link>
				<br />
				<Outlet />
			</div>
		)
	)
}

export default PostDetails
