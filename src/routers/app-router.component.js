
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ExpanseDashboardComponent from '../components/expanse-dashboard.component';
import AddExpanseComponent from '../components/add-expanse.component';
import EditExpanseComponent from '../components/edit-expanse.component';
import NotFoundComponent from '../components/not-found.component';
import LoginPage from '../components/login.component';
import { createBrowserHistory } from 'history';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

// Get the history
export const history = createBrowserHistory();

const AppRouter = () =>  (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpanseDashboardComponent}/>
            <PrivateRoute path="/add" component={AddExpanseComponent} exact={true}/>
            <PrivateRoute path="/edit/:id" component={EditExpanseComponent} exact={true}/>
            <Route component={NotFoundComponent} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;
