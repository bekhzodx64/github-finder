import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import HomePage from 'pages/HomePage'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import User from 'pages/User'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='about' element={<About />} />
				<Route path='*' element={<NotFound />} />
				<Route path='user/:login' element={<User />} />
			</Route>
		</Routes>
	)
}

export default App
