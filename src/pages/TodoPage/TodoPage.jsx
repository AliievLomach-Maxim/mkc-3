import { useSelector } from 'react-redux'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodoForm from '../../components/CreateTodoForm/CreateTodoForm'

const TodoPage = () => {
	// const {todos} = useSelector((state) => state.todo)
	const todos = useSelector((state) => state.todo.todos)

	return (
		<div>
			<CreateTodoForm />
			<br />
			{todos?.length && <TodoList todos={todos} />}
		</div>
	)
}

export default TodoPage
