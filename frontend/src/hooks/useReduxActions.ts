import loadingTransitionSlice from '@/lib/redux/loading-transition/LoadingTransitionSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useReduxActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() =>
			bindActionCreators(
				{
					...loadingTransitionSlice.actions
				},
				dispatch
			),
		[dispatch]
	)
}
