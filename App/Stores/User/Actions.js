import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    // auth user informations
    authUserRequest: ['email', 'password'],
    // The operation has started and is loading
    authUserLoading: null,
    // User informations were successfully authed
    authUserSuccess: ['token'],
    // An error occurred
    authUserFailure: ['errorMessage'],
    // On startup clear message
    authUserMessageClear: null
})

export const UserTypes = Types
export default Creators
