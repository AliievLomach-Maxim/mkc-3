import { useId } from 'react'

const UserForm = ({ createUser }) => {
	const userNameId = useId()
	const emailFieldId = useId()

	const handleSubmit = (e) => {
		e.preventDefault()

		createUser({
			userName: e.target.elements.userName.value,
			email: e.target.elements.email.value,
			lang: e.target.elements.lang.value,
		})

		e.target.reset()
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={userNameId}>Name:</label>
			<input type='text' name='userName' id={userNameId} />
			<br />
			<label htmlFor={emailFieldId}>email:</label>
			<input type='email' name='email' id={emailFieldId} />
			<br />
			<label>
				lang:
				<select name='lang'>
					<option value='en'>EN</option>
					<option value='ua'>UA</option>
					<option value='fr'>FR</option>
				</select>
			</label>
			<br />

			<button type='submit'>Submit</button>
		</form>
	)
}

export default UserForm
