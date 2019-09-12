import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/style.scss';
import AppRouter, {history} from './routers/app-router.component';
import configureStore from './store/configure-store';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
import {startSetExpanses} from './actions/expanse-action';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth-action';
import Loader from './components/loader.component';

const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

ReactDOM.render(<Loader />, document.getElementById('app'));

let hasRendered = false;

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user)=>{
    console.log(history);
    if(user) {
        console.log('Auth state: logged-in with uid : '+ user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpanses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        console.log('Auth state: logged-out ');
        history.push('/');
    }
});



