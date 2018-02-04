import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function Store(sagaMiddleware){
    return createStore(
        reducer()
        ,composeEnhancers(applyMiddleware(sagaMiddleware))
    );
};

export default Store;