import './App.css'
import data from '../data.json'
import data2 from '../data2.json'
import CommentList from './components/CommentList'

function App() {
	return (
		<>
			<CommentList data={data} />
			<hr />
			<hr />
			<hr />
			<CommentList data={data2} />
		</>
	)
}

export default App
