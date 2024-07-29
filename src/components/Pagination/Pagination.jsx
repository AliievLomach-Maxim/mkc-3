import Button from '../Button/Button'

const Pagination = ({ increment, decrement, currentPage, totalPages }) => {
	return (
		<>
			<Button onClick={decrement}>Prev</Button>
			<p>
				{currentPage}/{totalPages}
			</p>
			<Button onClick={increment}>Next</Button>
		</>
	)
}

export default Pagination
