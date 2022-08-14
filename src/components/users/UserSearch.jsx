import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { findUsers, clearUsers, setAlert } from 'store/features/usersSlice'

const UserSearch = () => {
	const [inputText, setInputText] = useState('')
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputText(e.target.value)
	}

	const result = useSelector((state) => state.users.result)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputText === '') {
			dispatch(setAlert('Please enter something!'))
			setTimeout(() => {
				dispatch(setAlert(null))
			}, 3000)
		} else {
			dispatch(findUsers(inputText))
			setInputText('')
		}
	}

	const handleClear = () => {
		dispatch(clearUsers())
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search users'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								value={inputText}
								onChange={handleChange}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>

			{result.total_count > 0 && (
				<div>
					<button
						type='button'
						className='btn bnt-ghost btn-lg'
						onClick={handleClear}
					>
						Clear
					</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch
