import { useMemo, useState } from 'react'

const MemoTest = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const [c, setC] = useState(0)

	const calculatedValue = useMemo(() => {
		console.log('calculatedValue a+b')
		return a + b
	}, [a, b])

	return (
		<div>
			<button onClick={() => setA(a + 1)}>a: {a}</button>
			<button onClick={() => setB(b + 1)}>b: {b}</button>
			<button onClick={() => setC(c + 1)}>c: {c}</button>
			<hr />
			<p>{calculatedValue}</p>
		</div>
	)
}

export default MemoTest
