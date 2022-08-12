import { Fragment } from 'react'
import Spinner from 'components/layout/Spinner'
import UserItem from './UserItem'

const UserResults = ({ users, isFetching }) => {
	if (isFetching) {
		return <Spinner />
	}

	return (
		<Fragment>
			{users?.total_count === 0 ? (
				<h2 className='text-center text-3xl font-medium'>
					Sorry! There is no such user.
				</h2>
			) : (
				<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
					{users?.items?.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			)}
		</Fragment>
	)
}

export default UserResults
