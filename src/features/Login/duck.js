import {LOG_IN, LOG_IN_FB, LOGGED_IN, LOGGED_OUT, LOGIN_ERROR} from './actions';

export const userReducer = (state = {profile: {username: 'anonymous'}}, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {...state, isLoggingIn: true, error: false};
        }
        case LOG_IN_FB: {
            return {...state, isLoggingIn: true, error: false};
        }
        case LOGGED_IN: {
            return {profile: action.user, isLoggingIn: false, error: false}
        }
        case LOGGED_OUT: {
            return {profile: {username: 'anonymous'}};
        }
        case LOGIN_ERROR: {
            return {...state, isLoggingIn: false, error: true}
        }
        default: 
            return state;
    } 
};
