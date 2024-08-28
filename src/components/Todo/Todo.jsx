import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../store/todo/slice'

const Todo = ({ todo }) => {
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(removeTodo(id))
	}

	const handleToggle = (id) => {
		dispatch(toggleTodo(id))
	}

	return (
		<li>
			{todo.title}
			<button onClick={() => handleDelete(todo.id)}>remove</button>
			<input
				type='checkbox'
				value={todo.completed}
				onChange={() => handleToggle(todo.id)}
			/>
		</li>
	)
}

export default Todo
