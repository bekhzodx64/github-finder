import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { GITHUB_URL, GITHUB_TOKEN } from 'config'

const initialState = {
	result: [],
	isLoading: false,
}

export const findUsers = createAsyncThunk('users/findUsers', async (user) => {
	return await fetch(`${GITHUB_URL}search/users?q=${user}`, {
		method: 'GET',
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err))
})

const usersSlice = createSlice({
	name: 'result',
	initialState,
	reducers: {
		clearUsers: (state) => {
			state.result = []
		},
	},
	extraReducers: {
		[findUsers.pending]: (state) => {
			state.isLoading = true
		},
		[findUsers.fulfilled]: (state, action) => {
			state.isLoading = false
			state.result = action.payload
		},
		[findUsers.rejected]: (state) => {
			state.isLoading = false
		},
	},
})

export const { clearUsers } = usersSlice.actions
export default usersSlice.reducer
