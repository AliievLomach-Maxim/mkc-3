import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../../components/TodoList/TodoList'
import { fetchTodosOp } from '../../store/todo/operations'
import { useEffect } from 'react'
import FilterForm from '../../components/FilterForm/FilterForm'
import {
	selectError,
	selectFilteredTodos,
	selectLoading,
	// selectTodos,
} from '../../store/todo/sliceAsync'
// import { selectSearch } from '../../store/filterSlice'

// const reducer = (second) => { third }

const TodoPage = () => {
	// const todos = useSelector(selectTodos)
	const isLoading = useSelector(selectLoading)
	const error = useSelector(selectError)
	// const filterValue = useSelector(selectSearch)
	const filteredTodos = useSelector(selectFilteredTodos)

	// const [state, setState] = useState({
	// 	name: '',
	// 	age: 42,
	// })

	// 	const [state, dispatch] = useReducer({}, ()=>{}, )
	// dispatch(setVale(10))

	// setState({...state,{name:}})
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodosOp())
	}, [dispatch])

	// const filteredTodos = todos?.filter((el) =>
	// 	el.title.toLowerCase().includes(filterValue.toLowerCase())
	// )

	return (
		<div>
			{isLoading && <h1>isLoading...</h1>}
			{error && <h1>oops...{error}</h1>}
			<FilterForm />
			<br />
			{filteredTodos?.length && <TodoList todos={filteredTodos} />}
		</div>
	)
}

export default TodoPage
