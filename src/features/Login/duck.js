import {LOG_IN, LOG_IN_FB, LOGGED_IN, LOGGED_OUT} from './actions';

export const userReducer = (state = {profile: {username: 'anonymous'}}, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {...state, isLoggingIn: true};
        }
        case LOG_IN_FB: {
            return {...state, isLoggingIn: true};
        }
        case LOGGED_IN: {
            return {profile: action.user, isLoggingIn: false}
        }
        case LOGGED_OUT: {
            return {profile: {username: 'anonymous'}};
        }
        default: 
            return state;
    } 
};
