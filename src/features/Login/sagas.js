import {LOG_IN, LOG_IN_FB, loggedIn, LOG_OUT, loggedOut, loginError} from './actions';
import {call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {login as loginWithApi, loginFacebook as loginFacebookWithApi, logout as logoutWithApi} from '../../api/user';
import {browserHistory} from 'react-router';

export function* logIn (action) {
    const {username, password} = action;
    try {
        const {user} = yield call(loginWithApi, username, password);
        yield put(loggedIn(user)); 
        browserHistory.push('/decks');
    } catch (error) {
        yield put(loginError(error));
    }
}

export function* logInFacebook (action) {
    const {token} = action;
    try {
        const {user} = yield call(loginFacebookWithApi, token);
        yield put(loggedIn(user));
        browserHistory.push('/decks');
    } catch (error) {
        yield put(loginError(error));
    }
}

export function* logOut () {
    debugger;
    yield put(loggedOut());
    browserHistory.push('/welcome/login');
    yield call(logoutWithApi);
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
