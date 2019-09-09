import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expansesReducer from '../reducers/expanse-reducer';
import filtersReducer from '../reducers/filter-reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore( 
        combineReducers({expanses: expansesReducer,filters:filtersReducer}),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
} 