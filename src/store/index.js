import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import usersSlice from './features/usersSlice'

export const store = configureStore({
	reducer: {
		users: usersSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})
