import { takeLatest, all } from 'redux-saga/effects'

import { startup } from './StartupSaga'
import { StartupTypes } from 'App/Stores/Startup/Actions'

import { fetchUser } from './ExampleSaga'
import { ExampleTypes } from 'App/Stores/Example/Actions'

import { authUser } from './UserSaga'
import { UserTypes } from 'App/Stores/User/Actions'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // Call `authUser()` when a `AUTH_USER` action is triggered
    takeLatest(UserTypes.AUTH_USER_REQUEST, authUser),
  ])
}
