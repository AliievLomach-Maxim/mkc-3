const Comment = ({ name, email, comment, isRead }) => {
	return (
		<li>
			<h2>Name: {name}</h2>
			<span>Email: {email}</span>
			{undefined}
			{null}
			{false}
			{true}
			{/* {isRead ? <p>Read</p> : <p>Unread</p>} */}
			{isRead && <p>Read</p>}
			<p>Comment: {comment}</p>
		</li>
	)
}
export default Comment
