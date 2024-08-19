import { Link } from 'react-router-dom'

const Post = ({ post: { title, body, views, id } }) => {
	return (
		<div>
			<ul>
				<li>ID:{id}</li>
				<li>Title:{title}</li>
				<li>Description:{body}</li>
				<li>Views:{views}</li>
				<Link to={`/post/${id}`}>Details</Link>
			</ul>
		</div>
	)
}

export default Post
