import { UserTypes } from './Actions'
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'

export const authUserLoading = (state) => ({
    ...state,
    authIsLoading: true,
    authErrorMessage: null,
})

export const authUserSuccess = (state, { token }) => ({
    ...state,
    token: token,
    authIsLoading: false,
    authErrorMessage: null,
})

export const authUserFailure = (state, { errorMessage }) => ({
    ...state,
    token: {},
    authIsLoading: false,
    authErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
    [UserTypes.AUTH_USER_LOADING]: authUserLoading,
    [UserTypes.AUTH_USER_SUCCESS]: authUserSuccess,
    [UserTypes.AUTH_USER_FAILURE]: authUserFailure,
})
