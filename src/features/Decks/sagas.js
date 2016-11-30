import {delay, throttle, takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {fetchAllDecks, createDeck as createDeckApi, deleteDeck as deleteDeckApi} from '../../api/decks';
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
    const deckId = yield call(createDeckApi, action.deck);
    const newDeck = {
        id: {
            $oid: deckId
        },
        ...action.deck
    };
    yield put(createdDeck(newDeck));
}

export function* deleteDeck (action) {
    debugger;
    const {deckId} = action;
    const response = yield call(deleteDeckApi, deckId);
    debugger;
}

export function* watchLoadDecks () {
    yield* throttle(2000, LOAD_DECKS, loadDecks);
}

export function* watchCreateDeck () {
    yield* takeEvery(CREATE_DECK, createDeck);
}

export function* watchDeleteDeck () {
    yield* throttle(1000, DELETE_DECK, deleteDeck);
}


const deckSagas = [helloSaga, watchLoadDecks, watchCreateDeck, watchDeleteDeck];
export default deckSagas;
