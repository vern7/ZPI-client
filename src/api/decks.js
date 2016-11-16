import _ from 'lodash';
import delay from './utils/delay';

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

export const fetchAllDecks = () => delay(2000).then(() => fakeCollection.decks);

export const fetchDeck = (deckId) => delay(2000).then(() =>
    _.find(fakeCollection.decks, (deck) => deck._id === deckId));
