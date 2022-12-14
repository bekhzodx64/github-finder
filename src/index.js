import ReactDOM from 'react-dom/client'
import App from 'App'
import 'index.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter basename='/github-finder'>
			<App />
		</BrowserRouter>
	</Provider>
)
