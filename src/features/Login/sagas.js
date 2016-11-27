import {LOG_IN, loggedIn} from './actions';
import {call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {login as loginWithApi} from '../../api/user';
import {browserHistory} from 'react-router';

export function* logIn (action) {
    const {username, password} = action;
    debugger;
    const {user} = yield call(loginWithApi, username, password);
    debugger;
    yield put(loggedIn(user)); 
    browserHistory.push('/decks');
}

export function* watchLogIn () {
    yield* takeEvery(LOG_IN, logIn)
}

const loginSagas = [watchLogIn];
export default loginSagas;
