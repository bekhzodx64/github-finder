import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import HomePage from 'pages/HomePage'
import About from 'pages/About'
import NotFound from 'pages/NotFound'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
