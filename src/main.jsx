import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'modern-normalize'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<App />
				{/* </PersistGate> */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
// Компонент
// 1. Створюємо стан
// 2. Зарендерити стан в jsx
// 3. Написати ф-ю для оновлення стану
// 4. Опрацювати оновлення стану
//
// Redux
// 1. (один раз на весь проект) Розгорнути стор
// 2. Створити стан
// 3. Зарендерити стан в jsx
// 4. Створити екшени для оновлення стану
// 5. Обробити екшени
