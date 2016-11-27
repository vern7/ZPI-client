import {delay, throttle, takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {fetchAllDecks, createDeck as createDeckApi, } from '../../api/decks';
import {CREATE_DECK, LOAD_DECKS, DELETE_DECK, loadedDecks, createdDeck} from './actions';

// to delete
export function* helloSaga () {
    yield call(delay, 2000);
    console.log('hello saga');
}

export function* loadDecks () {
    const decks = yield call(fetchAllDecks);
    yield put(loadedDecks(decks));
}

export function* createDeck (action) {
    const {name, description, ownerId} = action;
    const deck = yield call(createDeckApi, name, description, ownerId);
    // @TODO check what createDeckApi returns
    debugger;
    yield put(createdDeck(deck));
}

export function* deleteDeck (action) {
    const {deckId} = action;
    const response = yield call(deleteDeck, deckId);
    debugger;
}

export function* watchLoadDecks () {
    yield* throttle(2000, LOAD_DECKS, loadDecks);
}

export function* watchCreateDeck () {
    yield* takeEvery(CREATE_DECK, createDeck);
}

export function* watchDeleteDeck () {
    yield* takeEvery(DELETE_DECK, deleteDeck);
}


const deckSagas = [helloSaga, watchLoadDecks];
export default deckSagas;
