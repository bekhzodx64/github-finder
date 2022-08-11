const UserSearch = ({ data, inputText, setInputText, searchUsers }) => {
	const handleChange = (e) => {
		setInputText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputText === '') {
			alert('Please enter something')
		} else {
			setInputText('')
		}
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
								onClick={() => searchUsers(inputText)}
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>

			{data && (
				<div>
					<button type='button' className='btn bnt-ghost btn-lg'>
						Clear
					</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch
