import { Fragment, useState } from 'react'
import UserResults from 'components/users/UserResults'
import UserSearch from 'components/users/UserSearch'

import { useLazySearchUsersQuery } from 'store/api'

const HomePage = () => {
	const [inputText, setInputText] = useState('')

	const [searchUsers, { data, isFetching }] = useLazySearchUsersQuery(inputText)

	return (
		<Fragment>
			<UserSearch
				data={data}
				inputText={inputText}
				setInputText={setInputText}
				searchUsers={searchUsers}
			/>
			<UserResults data={data} isFetching={isFetching} />
		</Fragment>
	)
}

export default HomePage
