import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchPost } from '../../api/postsApi'
import { Suspense, useEffect, useRef, useState } from 'react'

const PostDetails = () => {
	const { id } = useParams()
	const [post, setPost] = useState(null)

	const location = useLocation()
	const locationObj = useRef(location.state ?? '/posts')

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
				{/* <Link to={location.state ?? '/posts'}>go back</Link> */}
				<Link to={locationObj.current}>go back</Link>
				<br />
				<br />
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
				<Link to='reactions'>Reactions</Link>
				<Link to={`owner/${post.userId}`}>Owner</Link>
				<br />
				<Suspense fallback={<div>SUB LOADING</div>}>
					<Outlet />
				</Suspense>
			</div>
		)
	)
}

export default PostDetails
