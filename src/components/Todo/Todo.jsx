import { useDispatch } from 'react-redux'
import { removeTodoOp, updateTodoOp } from '../../store/todo/operations'
import toast from 'react-hot-toast'

const Todo = ({ todo }) => {
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(removeTodoOp(id))
	}

	const handleToggle = (id) => {
		dispatch(updateTodoOp({ id, newTodo: { completed: !todo.completed } }))
			.unwrap()
			.then(() => {
				toast.success('successfully updated')
			})
		// try {
		// 	await dispatch(updateTodoOp({ id, newTodo: { completed: !todo.completed } }))
		// 	.unwrap()
		// 	toast.success('successfully updated')

		// } catch (error) {
		// 	toast.error('oops...')

		// }
	}

	return (
		<li>
			{todo.title}
			<button onClick={() => handleDelete(todo.id)}>remove</button>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => handleToggle(todo.id)}
			/>
		</li>
	)
}

export default Todo
