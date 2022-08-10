import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Spinner = () => {
	return (
		<div className='flex justify-center'>
			<AiOutlineLoading3Quarters className='animate-spin text-white text-5xl' />
		</div>
	)
}

export default Spinner
