import {getUserId} from '../../api/user';

export const CREATE_DECK = 'CREATE_DECK';

export const createDeck = ({name, description}) => {
    const ownerId = getUserId();
    return {
        type: CREATE_DECK,
        data: {
            name,
            description,
            ownerId,
        }
    };
};

const initialState = [];

export const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DECK: {
            const newState = [...state, action.data];
            debugger;
            return newState;
            // return [...state, action.data];
        }
        default:
            return state;
    }
};
