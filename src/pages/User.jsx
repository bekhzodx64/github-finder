import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUser } from 'store/features/usersSlice'

import Spinner from 'components/layout/Spinner'

const User = () => {
	const dispatch = useDispatch()
	const { login } = useParams()

	useEffect(() => {
		dispatch(getUser(login))
	}, [dispatch, login])

	return (
		<div>
			<h1>{login}</h1>
		</div>
	)
}

export default User
