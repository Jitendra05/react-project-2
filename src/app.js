import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/app-router.component';
import configureStore from './store/configure-store';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
import {startSetExpanses} from './actions/expanse-action';

const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

ReactDOM.render(<p>Loding ...</p>, document.getElementById('app'));

store.dispatch(startSetExpanses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});



