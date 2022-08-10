import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GITHUB_URL, GITHUB_TOKEN } from 'config'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: GITHUB_URL,
		prepareHeaders: (headers) => {
			headers.set('Authorization', `token ${GITHUB_TOKEN}`)
			return headers
		},
	}),
	endpoints: (build) => ({
		getUsers: build.query({
			query: () => `/users`,
		}),
		searchUsers: build.query({
			query: (text) => `/search/users?q=${text}`,
		}),
	}),
})

export const { useGetUsersQuery, useLazySearchUsersQuery } = api
