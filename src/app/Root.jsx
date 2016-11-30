import React from 'react';
import {Provider} from 'react-redux';
import getRoutes from './routes';
import {Router, browserHistory} from 'react-router';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes(store)}
        </Router>
    </Provider>
);

export default Root;
