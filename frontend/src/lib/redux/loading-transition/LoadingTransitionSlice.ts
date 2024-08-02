import { createSlice } from '@reduxjs/toolkit'

type LoadingTransitionState = {
	data: {
		transitionInProcess: boolean
	}
}

const loadingTransitionSlice = createSlice({
	name: 'loading-transition',
	initialState: <LoadingTransitionState>{
		data: {
			transitionInProcess: false
		}
	},
	reducers: {
		enableLoadingTransition: (state: LoadingTransitionState) => {
			state.data.transitionInProcess = true
		},
		disableLoadingTransition: (state: LoadingTransitionState) => {
			state.data.transitionInProcess = false
		}
	}
})

export const { enableLoadingTransition, disableLoadingTransition } =
	loadingTransitionSlice.actions
export default loadingTransitionSlice
