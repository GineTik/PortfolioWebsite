import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loadingTransitionSlice from './loading-transition/LoadingTransitionSlice'

// CONFIGURE PERSIST

const globalPersistConfig = {
	key: 'root',
	storage
}

const loadingTransitionPersistConfig = {
	key: 'loading-transition',
	storage
}

const persistedReducer = persistReducer(
	globalPersistConfig,
	combineReducers({
		loadingTransition: persistReducer(
			loadingTransitionPersistConfig,
			loadingTransitionSlice.reducer
		)
	})
)

// CONFIGURE STORE

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

const persistor = persistStore(store)

export { persistor, store }
// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
