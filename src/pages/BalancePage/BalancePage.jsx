import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../../store/balanceSlice'

const BalancePage = () => {
	const dispatch = useDispatch()
	const balance = useSelector((state) => state.balance.value)

	const handleDeposit = () => {
		dispatch(deposit(100))
	}

	const handleWithdraw = () => {
		dispatch(withdraw(100))
	}

	return (
		<div>
			<button onClick={handleDeposit}>deposit</button>
			<br />
			<br />
			balance:{balance}
			<br />
			<br />
			<button onClick={handleWithdraw}>withdraw</button>
		</div>
	)
}

export default BalancePage
