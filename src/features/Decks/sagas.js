import {delay, takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

export function* helloSaga () {
    yield call(delay, 2000);
    console.log('hello saga');
}



const deckSagas = [helloSaga];
export default deckSagas;
