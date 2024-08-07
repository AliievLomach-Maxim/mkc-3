import { Field, Form, Formik, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import styles from './FormikForm.module.css'
import clsx from 'clsx'
import { BsEarbuds } from 'react-icons/bs'

const throttle = (clb, str) => {
	setTimeout(() => {
		clb(str)
	}, 500)
}

const schemaValidation = Yup.object().shape({
	userName: Yup.string()
		.min(3, 'Min Error')
		.max(6, 'Max error')
		.required('is required'),
	email: Yup.string().email('no valid Email').required('is required'),
	lang: Yup.string().oneOf(['en', 'ua']).required('is required'),
})

const FormikForm = ({ createUser }) => {
	// const userNameId = useId()
	const emailFieldId = useId()
	const langFieldId = useId()

	const handleSubmit = (values, actions) => {
		createUser(values)
		actions.resetForm()
	}

	return (
		<Formik
			initialValues={{
				userName: '',
				email: '',
				lang: 'en',
			}}
			onSubmit={handleSubmit}
			validationSchema={schemaValidation}
			validateOnChange={false}
		>
			{(props) => {
				console.log('props', props)
				return (
					<Form className={styles.form}>
						<label className={styles.label}>
							userName:
							{/* <Field
								className={clsx(props.errors.userName && styles.errorField)}
								type='text'
								name='userName'
							/> */}
							<input
								type='text'
								name='userName'
								value={props.values.userName}
								onChange={(e) => {
									props.handleChange(e)
									throttle(props.validateField, 'userName')
								}}
								onBlur={props.handleBlur}
							/>
							<BsEarbuds className={styles.userNameIcon} />
						</label>
						{/* <TextField
							name='userName'
							label='Outlined'
							variant='outlined'
							value={props.values.userName}
							onChange={props.handleChange}
							onBlur={props.handleBlur}
						/> */}
						{props.errors.userName && <>qwrey</>}
						<ErrorMessage
							name='userName'
							component='span'
							className={styles.error}
						/>
						<br />
						<label htmlFor={emailFieldId}>email:</label>
						<Field type='email' name='email' id={emailFieldId} />
						<ErrorMessage name='email' component='span' />
						<br />
						<label htmlFor={langFieldId}>lang:</label>
						<Field as='select' id={langFieldId} name='lang'>
							<option value='en'>EN</option>
							<option value='ua'>UA</option>
						</Field>
						<ErrorMessage name='lang' component='span' />
						<br />
						<button type='submit'>Create user</button>
					</Form>
				)
			}}
		</Formik>
		// <Formik
		// 	initialValues={{
		// 		userName: '',
		// 		email: '',
		// 		lang: 'en',
		// 	}}
		// 	onSubmit={handleSubmit}
		// 	validationSchema={schemaValidation}
		// >
		// 	<Form className={styles.form}>
		// 		<label htmlFor={userNameId}>userName:</label>
		// 		<Field type='text' name='userName' id={userNameId} />
		// 		<ErrorMessage
		// 			name='userName'
		// 			component='span'
		// 			className={styles.error}
		// 		/>
		// 		<br />
		// 		<label htmlFor={emailFieldId}>email:</label>
		// 		<Field type='email' name='email' id={emailFieldId} />
		// 		<ErrorMessage name='email' component='span' />
		// 		<br />
		// 		<label htmlFor={langFieldId}>lang:</label>
		// 		<Field as='select' id={langFieldId} name='lang'>
		// 			<option value='en'>EN</option>
		// 			<option value='ua'>UA</option>
		// 		</Field>
		// 		<ErrorMessage name='lang' component='span' />
		// 		<br />
		// 		<button type='submit'>Create user</button>
		// 	</Form>
		// </Formik>
	)
}

export default FormikForm
