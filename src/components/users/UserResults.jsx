import Spinner from 'components/layout/Spinner'
import UserItem from './UserItem'

import { useGetUsersQuery } from 'store/api'

const UserResults = () => {
	const { data: users, isLoading } = useGetUsersQuery([])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserResults
