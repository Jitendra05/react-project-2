import React from 'react';
import ExpanseList from './expanse-list.component';
import ExpanseListFilter from './expanse-list-filter.component';

const ExpanseDashboardComponent = () => (
    <div className="container">
        <ExpanseListFilter />
        <hr />
        <ExpanseList />
    </div>
);

export default ExpanseDashboardComponent;