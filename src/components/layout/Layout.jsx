import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Navbar />
			<main className='container py-10'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
