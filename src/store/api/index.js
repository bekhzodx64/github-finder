import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GITHUB_URL, GITHUB_TOKEN } from 'config'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: GITHUB_URL,
		prepareHeaders: (headers) => {
			headers.set('Authorization', `Bearer ${GITHUB_TOKEN}`)
			return headers
		},
	}),
	endpoints: (build) => ({
		getUsers: build.query({
			query: () => `/users`,
		}),
	}),
})

export const { useGetUsersQuery } = api
