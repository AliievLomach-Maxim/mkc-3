import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'modern-normalize'
import './index.css'
import LangProvider from './context/LangContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LangProvider>
			<App />
		</LangProvider>
	</React.StrictMode>
)
