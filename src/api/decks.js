import _ from 'lodash';

//fake API for developement 

const fakeCollection = {
    decks: [
        {
            _id: 1,
            name: 'francuski podstawa',
            description: 'podstawowe zwroty po francusku',
            ownerId: 1
        },
        {
            _id: 2,
            name: 'niemiecki podstawa',
            description: 'podstawowe zwroty po niemiecku',
            ownerId: 2
        },
    ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllDecks = () => delay(2000).then(() => fakeCollection.decks);

export const fetchDeck = (deckId) => delay(2000).then(() =>
    _.find(fakeCollection.decks, (deck) => deck._id === deckId));
