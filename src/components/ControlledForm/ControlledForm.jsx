import { useId, useState } from 'react'

const initialState = {
	userName: '',
	email: '',
	lang: 'en',
}

const ControlledForm = ({ createUser }) => {
	const [formState, setFormState] = useState(initialState)

	const userNameId = useId()
	const emailFieldId = useId()
	const langFieldId = useId()

	const handleSubmit = (e) => {
		e.preventDefault()
		createUser(formState)

		// e.target.reset()
		setFormState(initialState)
	}

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor={userNameId}>userName:</label>
				<input
					type='text'
					value={formState.userName}
					onChange={handleChange}
					name='userName'
					id={userNameId}
				/>

				{formState.userName.length > 5 && <h1>Nice Name!!!</h1>}
				<br />
				<label htmlFor={emailFieldId}>email:</label>
				<input
					type='email'
					value={formState.email}
					onChange={handleChange}
					name='email'
					id={emailFieldId}
				/>
				<br />
				<label htmlFor={langFieldId}>lang:</label>
				<select
					id={langFieldId}
					value={formState.lang}
					name='lang'
					onChange={handleChange}
				>
					<option value='en'>EN</option>
					<option value='ua'>UA</option>
				</select>
				<br />
				<button type='submit'>Create user</button>
			</form>
			<hr />
			<hr />
			<hr />
			<div>
				<h2>Your UserName: {formState.userName}</h2>
				<h2>Your email: {formState.email}</h2>
			</div>
		</>
	)
}

export default ControlledForm
