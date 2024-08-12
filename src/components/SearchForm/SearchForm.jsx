import { Field, Form, Formik } from 'formik'

const SearchForm = ({ onSearch }) => {
	const handleSubmit = (value, actions) => {
		onSearch(value.search)
		actions.resetForm()
	}
	return (
		<Formik
			initialValues={{
				search: '',
			}}
			onSubmit={handleSubmit}
		>
			<Form autoComplete='off'>
				<Field name='search' />
				<button type='submit'>Search</button>
			</Form>
		</Formik>
	)
}

export default SearchForm
