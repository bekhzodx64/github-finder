import { Fragment } from 'react'
import UserResults from 'components/users/UserResults'
import UserSearch from 'components/users/UserSearch'

const HomePage = () => {
	return (
		<Fragment>
			<UserSearch />
			<UserResults />
		</Fragment>
	)
}

export default HomePage
