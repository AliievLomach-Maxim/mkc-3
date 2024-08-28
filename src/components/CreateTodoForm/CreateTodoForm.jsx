import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todo/slice'

const CreateTodoForm = () => {
	const dispatch = useDispatch()
	const handleSubmit = (value, actions) => {
		dispatch(addTodo(value))
		actions.resetForm()
	}
	return (
		<Formik
			onSubmit={handleSubmit}
			initialValues={{
				title: '',
			}}
		>
			<Form>
				<Field name='title' />
				<button type='submit'>Create</button>
			</Form>
		</Formik>
	)
}

export default CreateTodoForm
