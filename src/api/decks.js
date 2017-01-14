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

export const fetchAllDecksApi = (keyword, filter) => {
    var url = `https://zpi.herokuapp.com/api/decks`;
    if (keyword && filter) {
        url += `?keyword=${keyword}&filter=${filter}`;
    } else {
        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        if (filter) {
            url += `?filter=${filter}`;
        }
    }
    return fetch(url).then((res) => res.json());
}

export const createDeck = (deck) => {
    deck = {...deck, difficulty: 4}; //TODO difficulty set in create deck form
    const body = JSON.stringify(deck);
    return fetch(`https://zpi.herokuapp.com/api/decks/create`, {
        method: 'POST',
        credentials: 'include',
        body
    });
};   

export const deleteDeck = (deckId) => {
    return fetch(`https://zpi.herokuapp.com/api/decks/${deckId}/delete`, {
        method: 'POST',
        credentials: 'include',
    }); 
};

export const addToFavorites = (deckId) => {
    const body = JSON.stringify({deckId});
    return fetch(`https://zpi.herokuapp.com/api/favorite/add`, {
        method: 'POST',
        credentials: 'include',
        body
    });
};

export const removeFromFavorites = (deckId) => {
    const body = JSON.stringify({deckId});
    return fetch(`https://zpi.herokuapp.com/api/favorite/remove`, {
        method: 'POST',
        credentials: 'include',
        body
    });
};


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
