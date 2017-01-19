import {compose, createStore, applyMiddleware} from 'redux';
import mainReducer from './mainReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedState = {
        user: {
            profile: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
        }
    };
    const store = createStore(
        mainReducer,
        persistedState,
        compose (
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : undefined,
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
