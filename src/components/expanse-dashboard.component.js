import React from 'react';
import ExpanseList from './expanse-list.component';
import ExpanseListFilter from './expanse-list-filter.component';
import ExpanseSummary from '../components/expanse-summary.component';

const ExpanseDashboardComponent = () => (
    <div className="container">
        <ExpanseSummary />
        <ExpanseListFilter />
        <hr />
        <ExpanseList />
    </div>
);

export default ExpanseDashboardComponent;