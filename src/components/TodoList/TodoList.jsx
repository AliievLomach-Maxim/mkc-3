import Todo from '../Todo/Todo'

const TodoList = ({ todos }) => {
	// const dispatch = useDispatch()

	// const handleDelete = (id) => {
	// 	dispatch(removeTodo(id))
	// }

	// const handleToggle = (id) => {
	// 	dispatch(toggleTodo(id))
	// }

	return (
		<ul>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	)
}

export default TodoList
