import Comment from './Comment'

const CommentList = ({ data }) => {
	return (
		<ul>
			{data.map((el) => (
				<Comment
					key={el.id}
					name={el.name}
					email={el.email}
					comment={el.body}
					isRead={el.isRead}
				/>
			))}
		</ul>
	)
}
export default CommentList
