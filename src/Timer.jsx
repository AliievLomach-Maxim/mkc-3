import { useEffect } from 'react'

const Timer = () => {
	useEffect(() => {
		const id = setInterval(() => {
			console.log(Date.now())
		}, 1000)
		console.log('Mount')
		return () => {
			console.log('Unmount')
			clearInterval(id)
		}
	}, [])

	return <div>timer</div>
}

export default Timer
