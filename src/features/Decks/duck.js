import {CREATE_DECK, DELETE_DECK, LOADED_DECKS, LOAD_DECKS} from './actions';
import _ from 'lodash';
import {combineReducers} from 'redux';


export const decks = (state = [], action) => {
    switch (action.type) {
        case CREATE_DECK: {
            const newState = [...state, action.data];
            return newState;
        }
        case DELETE_DECK: {
            return state.filter(deck => deck._id != action.deckId);
        }
        case LOADED_DECKS: {
            return _.union(state, action.decks);
        }
        default:
            return state;
    }
};

export const isFetching = (state = true, action) => {
    switch (action.type) {
        case LOAD_DECKS: {
            return true;
        }
        case LOADED_DECKS: {
            return false;
        }
        default:
            return state;
    }
};

export const decksReducer = combineReducers({
    decks,
    isFetching
});
