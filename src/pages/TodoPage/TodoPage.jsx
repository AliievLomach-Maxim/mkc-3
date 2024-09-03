import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodoForm from '../../components/CreateTodoForm/CreateTodoForm'
import { fetchTodosOp } from '../../store/todo/operations'
import { useEffect } from 'react'

const TodoPage = () => {
	// const {todos} = useSelector((state) => state.todo)
	const todos = useSelector((state) => state.todo.todos)
	const isLoading = useSelector((state) => state.todo.isLoading)
	const error = useSelector((state) => state.todo.error)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodosOp())
	}, [dispatch])

	return (
		<div>
			{isLoading && <h1>isLoading...</h1>}
			{error && <h1>oops...{error}</h1>}
			<CreateTodoForm />
			<br />
			{todos?.length && <TodoList todos={todos} />}
		</div>
	)
}

export default TodoPage
