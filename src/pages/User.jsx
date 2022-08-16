import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getUser, getUserRepos } from 'store/features/usersSlice'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import Spinner from 'components/layout/Spinner'
import RepoList from 'components/repos/RepoList'

const User = () => {
	const dispatch = useDispatch()
	const { login: id } = useParams()

	const { isLoading } = useSelector((state) => state.users)
	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
		message,
	} = useSelector((state) => state.users.user)
	const repos = useSelector((state) => state.users.repos)

	useEffect(() => {
		dispatch(getUser(id))
		dispatch(getUserRepos(id))
	}, [dispatch, id])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<Fragment>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link to='/' className='btn btn-ghost'>
						Back To Search
					</Link>
				</div>
				{message === 'Not Found' ? (
					<h2 className='text-center text-3xl font-medium'>
						Sorry! There is no such user.
					</h2>
				) : (
					<Fragment>
						<div className='grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8'>
							<div className='custom-card-image mb-6 md:mb-0'>
								<div className='rounded-lg shadow-xl card image-full flex flex-col items-end'>
									<figure>
										<img src={avatar_url} alt={login} />
									</figure>
									<div className='card-body gap-0 bg-black bg-opacity-30 relative'>
										<h2 className='card-title mb-0 text-white'>{name}</h2>
										<p className='text-white'>{login}</p>
										<span className='absolute h-full right-0 left-0 bottom-full bg-gradient-to-b from-transparent to-black/30' />
									</div>
								</div>
							</div>

							<div className='col-span-2'>
								<div className='mb-6'>
									<div className='flex items-center'>
										<h1 className='text-white text-3xl card-title'>{name}</h1>
										<div className='ml-2 mr-1 badge badge-success'>{type}</div>
										{hireable && (
											<div className='mx-1 badge badge-info'>Hireable</div>
										)}
									</div>
									<p>{bio}</p>
									<div className='mt-4 card-actions'>
										<a
											href={html_url}
											target='_blank'
											rel='noreferrer'
											className='btn btn-outline'
										>
											Visit Github Profile
										</a>
									</div>
								</div>

								<div className='w-full rounded-lg shadow-md bg-base-100 stats'>
									{location && (
										<div className='stat'>
											<div className='stat-title text-md'>Location</div>
											<div className='text-lg stat-value'>{location}</div>
										</div>
									)}
									{blog && (
										<div className='stat'>
											<div className='stat-title text-md'>Website</div>
											<div className='text-lg stat-value'>
												<a href={blog} target='_blank' rel='noreferrer'>
													{blog}
												</a>
											</div>
										</div>
									)}
									{twitter_username && (
										<div className='stat'>
											<div className='stat-title text-md'>Twitter</div>
											<div className='text-lg stat-value'>
												<a
													href={`https://twitter.com/${twitter_username}`}
													target='_blank'
													rel='noreferrer'
												>
													{twitter_username}
												</a>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>

						<div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<FaUsers className='text-3xl md:text-5xl' />
								</div>
								<div className='stat-title pr-5'>Followers</div>
								<div className='stat-value pr-5 text-3xl md:text-4xl'>
									{followers}
								</div>
							</div>
							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<FaUserFriends className='text-3xl md:text-5xl' />
								</div>
								<div className='stat-title pr-5'>Following</div>
								<div className='stat-value pr-5 text-3xl md:text-4xl'>
									{following}
								</div>
							</div>
							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<FaCodepen className='text-3xl md:text-5xl' />
								</div>
								<div className='stat-title pr-5'>Public Repos</div>
								<div className='stat-value pr-5 text-3xl md:text-4xl'>
									{public_repos}
								</div>
							</div>
							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<FaStore className='text-3xl md:text-5xl' />
								</div>
								<div className='stat-title pr-5'>Public Gists</div>
								<div className='stat-value pr-5 text-3xl md:text-4xl'>
									{public_gists}
								</div>
							</div>
						</div>

						<RepoList repos={repos} />
					</Fragment>
				)}
			</div>
		</Fragment>
	)
}

export default User
