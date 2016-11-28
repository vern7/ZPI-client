import _ from 'lodash';
import delay from './utils/delay';
import {USE_MOCKS} from './config';

//fake API for developement 

const fakeCollection = {
    decks: [
        {
            _id: 1,
            name: 'francuski podstawa',
            description: 'podstawowe zwroty po francusku',
            ownerId: 1,
            favorite: false,
        },
        {
            _id: 2,
            name: 'niemiecki podstawa',
            description: 'podstawowe zwroty po niemiecku',
            ownerId: 2,
            favorite: false,
        },
    ]
};

// API

export const fetchAllDecksApi = () => {
    return fetch(`https://zpi.herokuapp.com/api/decks`).then((res) => res.json());
}

export const createDeck = (name, description, ownerId) => {
    debugger;
    const data = new FormData();
    const deck = {name, description, ownerId, favorite: false, difficulty: 4};
    data.append('json', JSON.stringify(deck));

    return fetch(`https://zpi.herokuapp.com/api/decks/create`, {method: 'POST', credentials: 'include', body: data})
}

export const deleteDeck = (deckId) => {
    return fetch(`//zpi.herokuapp.com/api/deck/${deckId}/delete`);
}


// MOCKS

export const fetchAllMockedDecks = () => delay(1000).then(() => fakeCollection.decks);

export const fetchMockedDeck = (deckId) => delay(2000).then(() =>
    _.find(fakeCollection.decks, (deck) => deck._id === deckId));

export const fetchAllDecks = () => {
    if (USE_MOCKS) {
        return fetchAllMockedDecks();
    }
    return fetchAllDecksApi();
} 

export const fetchDeck = (deckId) => {
    if (USE_MOCKS) {
        return fetchMockedDeck(deckId);
    }
    console.log('no api');
}
