import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { GITHUB_URL, GITHUB_TOKEN } from 'config'

const initialState = {
	users: [],
	user: {},
	repos: [],
	isLoading: false,
	alert: null,
}

export const findUsers = createAsyncThunk('users/findUsers', async (user) => {
	return await fetch(`${GITHUB_URL}/search/users?q=${user}`, {
		method: 'GET',
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err))
})

export const getUser = createAsyncThunk('users/getUser', async (login) => {
	return await fetch(`${GITHUB_URL}/users/${login}`, {
		method: 'GET',
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err))
})

export const getUserRepos = createAsyncThunk(
	'users/getUserRepos',
	async (login) => {
		const params = new URLSearchParams({
			sort: 'created',
		})

		return await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})
			.then((res) => res.json())
			.catch((err) => console.log(err))
	}
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		clearUsers: (state) => {
			state.users = []
		},
		setAlert: (state, { payload }) => {
			state.alert = payload
		},
	},
	extraReducers: {
		[findUsers.pending]: (state) => {
			state.isLoading = true
		},
		[findUsers.fulfilled]: (state, action) => {
			state.isLoading = false
			state.users = action.payload
		},
		[findUsers.rejected]: (state) => {
			state.isLoading = false
		},
		[getUser.pending]: (state) => {
			state.isLoading = true
		},
		[getUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.user = action.payload
		},
		[getUser.rejected]: (state) => {
			state.isLoading = false
		},
		[getUserRepos.pending]: (state) => {
			state.isLoading = true
		},
		[getUserRepos.fulfilled]: (state, action) => {
			state.isLoading = false
			state.repos = action.payload
		},
		[getUserRepos.rejected]: (state) => {
			state.isLoading = false
		},
	},
})

export const { clearUsers, setAlert } = usersSlice.actions
export default usersSlice.reducer
