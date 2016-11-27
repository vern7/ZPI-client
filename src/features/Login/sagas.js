import {LOG_IN, loggedIn, LOG_OUT, loggedOut} from './actions';
import {call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {login as loginWithApi, logout as logoutWithApi} from '../../api/user';
import {browserHistory} from 'react-router';

export function* logIn (action) {
    const {username, password} = action;
    const {user} = yield call(loginWithApi, username, password);
    yield put(loggedIn(user)); 
    browserHistory.push('/decks');
}

export function* logOut () {
    yield call(logoutWithApi);
    yield put(loggedOut);
    browserHistory.push('/welcome/login');
}

export function* watchLogIn () {
    yield* takeEvery(LOG_IN, logIn)
}

export function* watchLogOut () {
    yield* takeEvery(LOG_OUT, logOut)
}

const loginSagas = [watchLogIn, watchLogOut];
export default loginSagas;
