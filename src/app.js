import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/app-router.component';
import configureStore from './store/configure-store';

const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));


