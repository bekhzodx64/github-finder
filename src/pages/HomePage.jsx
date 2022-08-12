import { Fragment, useState, useEffect } from 'react'
import UserResults from 'components/users/UserResults'
import UserSearch from 'components/users/UserSearch'

import { useLazySearchUsersQuery } from 'store/api'
import { saveUsers, clearUsers } from 'store/features/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
	const dispatch = useDispatch()
	const [inputText, setInputText] = useState('')

	const [searchUsers, { data, isFetching }] = useLazySearchUsersQuery(inputText)
	const users = useSelector((state) => state.users.users)

	const handleClear = () => {
		dispatch(clearUsers())
	}

	useEffect(() => {
		dispatch(saveUsers(data))
	}, [dispatch, data])

	return (
		<Fragment>
			<UserSearch
				users={users}
				inputText={inputText}
				setInputText={setInputText}
				searchUsers={searchUsers}
				handleClear={handleClear}
			/>
			<UserResults users={users} isFetching={isFetching} />
		</Fragment>
	)
}

export default HomePage
