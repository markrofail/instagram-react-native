import { put, call } from 'redux-saga/effects'
import { userService } from 'App/Services/UserService'
import UserActions from 'App/Stores/User/Actions'
// Watcher SAGA -> Action -> Worker SAGA

// Watcher SAGA
// Defined in ./index.js

// Worker SAGA
export function* authUser(payload) {
    email = payload.email;
    password = payload.password;

    console.log(`${email} ${password}`)

    // Dispatch a redux action using `put()`
    // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
    yield put(UserActions.authUserLoading())

    // Fetch user informations from an API
    const token = yield call(userService.authUser, email, password)
    if (token) {
        yield put(UserActions.authUserSuccess(token))
    } else {
        yield put(
            UserActions.authUserFailure('There was an error while fetching user informations.')
        )
    }
}
