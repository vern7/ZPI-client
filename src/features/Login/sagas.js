import {LOG_IN, LOG_IN_FB, loggedIn, LOG_OUT, loggedOut} from './actions';
import {call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {login as loginWithApi, loginFacebook as loginFacebookWithApi, logout as logoutWithApi} from '../../api/user';
import {browserHistory} from 'react-router';

export function* logIn (action) {
    const {username, password} = action;
    const {user} = yield call(loginWithApi, username, password);
    yield put(loggedIn(user)); 
    browserHistory.push('/decks');
}

export function* logInFacebook (action) {
    const {token} = action;
    const {user} = yield call(loginFacebookWithApi, token);
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

export function* watchLogInFacebook () {
    yield* takeEvery(LOG_IN_FB, logInFacebook)
}

export function* watchLogOut () {
    yield* takeEvery(LOG_OUT, logOut)
}

const loginSagas = [watchLogIn, watchLogInFacebook, watchLogOut];
export default loginSagas;
