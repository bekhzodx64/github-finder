import { useSelector } from 'react-redux'

import { GoAlert } from 'react-icons/go'

const Alert = () => {
	const alertMsg = useSelector((state) => state.users.alert)

	return (
		<p className='flex items-center mb-4 space-x-2'>
			<GoAlert size={20} color='#FECDD3' />
			<p className='flex-1 text-base font-semibold leading-7 text-white'>
				<strong>{alertMsg}</strong>
			</p>
		</p>
	)
}

export default Alert
