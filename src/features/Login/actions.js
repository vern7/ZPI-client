export const LOG_IN = 'LOG_IN';
export const LOG_IN_FB = 'LOG_IN_FB';
export const LOGGED_IN = 'LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const logIn = (username, password) => ({type: LOG_IN, username, password});

export const logInFacebook = (token) => ({type: LOG_IN_FB, token});

export const loggedIn = (user) => ({type: LOGGED_IN, user});

export const logOut = () => ({type: LOG_OUT});

export const loggedOut = () => ({type: LOGGED_OUT});

export const loginError = (error) => ({type: LOGIN_ERROR, error});
