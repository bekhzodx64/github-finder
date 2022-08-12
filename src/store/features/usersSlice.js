import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		saveUsers: (state, { payload }) => {
			state.users = payload
		},
		clearUsers: (state) => {
			state.users = []
		},
	},
})

export const { saveUsers, clearUsers } = usersSlice.actions
export default usersSlice.reducer
