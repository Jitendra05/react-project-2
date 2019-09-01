import {createStore, combineReducers} from 'redux';
import expansesReducer from '../reducers/expanse-reducer';
import filtersReducer from '../reducers/filter-reducer';

export default () => {
    const store = createStore( 
        combineReducers({expanses: expansesReducer,filters:filtersReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
} 