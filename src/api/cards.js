import _ from 'lodash';
import {v4} from 'node-uuid';

//fake API for developement 

const fakeCollection = {
    cards: [
        {
            _id: v4(),
            word: 'dom',
            translation: 'haus',
            deckId: 2,
        },
        {
            _id: v4(),
            word: 'most',
            translation: 'bridge',
            deckId: 1,
        }
    ]
};

export const fetchCardsMock = (deckId) => _.filter(fakeCollection.cards, (card) => card.deckId === deckId);



//API 

export const fetchCards = (deckId) => {
    return fetch(`https://zpi.herokuapp.com/api/decks/${deckId.$oid}`).then(res => res.json());
} 

export const saveCards = (cards) => {
    const cardsToSave = cards.map(card => ({deckId: card.deckId, word: card.word, translation: card.translation}));
    return fetch('https://zpi.herokuapp.com/api/cards/create', {
        method: 'POST',
        credentials: 'include',
        body: cardsToSave
    })
}

