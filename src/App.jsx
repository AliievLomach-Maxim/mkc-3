import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
// import FormTestRef from './components/FormTestRef/FormTestRef'
// import MemoTest from './components/MemoTest/MemoTest'

const App = () => {
	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	)
}

// const App = () => {
// 	// const [counter, setCounter] = useState(0)

// 	// const date = useRef(new Date())

// 	return (
// 		<div>
// 			{/* <button onClick={() => setCounter(counter + 1)}>{counter}</button>
// 			<p>{date.current.getTime()}</p> */}
// 			{/* <FormTestRef /> */}
// 			{/* <MemoTest /> */}
// 		</div>
// 	)
// }

export default App
// import { useCallback, useEffect, useState } from 'react'
// import MemoTest from './components/MemoTest/MemoTest'
// import axios from 'axios'

// const getFromApi = () => {
// 	return axios.get('/')
// }

// const App = () => {
// 	const [data, setData] = useState([])
// 	const [click, setClick] = useState(0)

// 	const getData = useCallback(async () => {
// 		const { data } = await getFromApi()
// 		setData(data)
// 	}, [])

// 	useEffect(() => {
// 		getData()
// 	}, [getData])

// 	const handleClick = () => {
// 		//

// 		getData()
// 	}

// 	const handleClick2 = () => {
// 		setClick(click + 1)
// 	}

// 	return (
// 		<div>
// 			<button onClick={handleClick2}>Click</button>
// 			<button onClick={handleClick}>Get again</button>
// 			<ul>
// 				{data.map((dataEl) => (
// 					<li key={dataEl.id}>{dataEl.name}</li>
// 				))}
// 			</ul>
// 			<MemoTest />
// 		</div>
// 	)
// }

// export default App
