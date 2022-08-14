import { Fragment } from 'react'
import UserResults from 'components/users/UserResults'
import UserSearch from 'components/users/UserSearch'
import { useSelector } from 'react-redux'
import Alert from 'components/layout/Alert'

const HomePage = () => {
	const alert = useSelector((state) => state.users.alert)

	return (
		<Fragment>
			{alert !== null && <Alert />}
			<UserSearch />
			<UserResults />
		</Fragment>
	)
}

export default HomePage
