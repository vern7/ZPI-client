import {delay, throttle, takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {
    fetchAllDecksApi,
    fetchAllLanguages,
    createDeck as createDeckApi,
    addToFavorites as addToFavoritesApi,
    removeFromFavorites as removeFromFavoritesApi,
    deleteDeck as deleteDeckApi} from '../../api/decks';

import {CREATE_DECK, LOAD_DECKS, LOAD_LANGUAGES, DELETE_DECK, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, loadedDecks, searchedDecks, loadedLanguages, createdDeck} from './actions';

// to delete
export function* helloSaga () {
    yield call(delay, 2000);
    console.log('hello saga');
}

export function* loadDecks (action) {
    const decks = yield call(fetchAllDecksApi, action.keyword, action.filter);
    if (action.keyword || action.filter) {
        yield put(searchedDecks(decks));
    } else {
        yield put(loadedDecks(decks));
    }
}

export function* loadLanguages () {
    const languages = yield call(fetchAllLanguages);
    yield put(loadedLanguages(languages));
}

export function* createDeck (action) {
    const deckId = yield call(createDeckApi, action.deck);
    const newDeck = {
        _id: {
            $oid: deckId
        },
        ...action.deck
    };
    yield put(createdDeck(newDeck));
}

export function* deleteDeck (action) {
    const {deckId} = action;
    const response = yield call(deleteDeckApi, deckId);
}

export function* addToFavorites (action) {
    yield call(addToFavoritesApi, action.deckId);
}

export function* removeFromFavorites (action) {
    yield call(removeFromFavoritesApi, action.deckId);
}

export function* watchLoadDecks () {
    yield* throttle(2000, LOAD_DECKS, loadDecks);
}

export function* watchLoadLanguages () {
    yield* throttle(2000, LOAD_LANGUAGES, loadLanguages);
}

export function* watchCreateDeck () {
    yield* takeEvery(CREATE_DECK, createDeck);
}

export function* watchDeleteDeck () {
    yield* throttle(1000, DELETE_DECK, deleteDeck);
}

export function* watchAddToFavorites () {
    yield* takeEvery(ADD_TO_FAVORITES, addToFavorites);
}

export function* watchRemoveFromFavorites () {
    yield* takeEvery(REMOVE_FROM_FAVORITES, removeFromFavorites);
}

const deckSagas = [helloSaga, watchLoadDecks, watchLoadLanguages, watchCreateDeck, watchDeleteDeck, watchAddToFavorites, watchRemoveFromFavorites];
export default deckSagas;
