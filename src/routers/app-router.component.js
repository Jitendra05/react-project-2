
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpanseDashboardComponent from '../components/expanse-dashboard.component';
import AddExpanseComponent from '../components/add-expanse.component';
import EditExpanseComponent from '../components/edit-expanse.component';
import ExpanseHelpComponent from '../components/help.component';
import NotFoundComponent from '../components/not-found.component';
import HeaderComponent from '../components/header-component';
import FooterComponent from '../components/footer.component';


const AppRouter = () =>  (
    <BrowserRouter>
    <div>
        <HeaderComponent />
        <Switch>
            <Route path="/" component={ExpanseDashboardComponent} exact={true} />
            <Route path="/add" component={AddExpanseComponent} exact={true}/>
            <Route path="/edit/:id" component={EditExpanseComponent} exact={true}/>
            <Route path="/help" component={ExpanseHelpComponent} exact={true}/>
            <Route component={NotFoundComponent} />
        </Switch>
        <FooterComponent />
    </div>
    </BrowserRouter>
);

export default AppRouter;
