import React from 'react';
import ExpanseList from './expanse-list.component';
import ExpanseListFilter from './expanse-list-filter.component';
import ExpanseSummary from '../components/expanse-summary.component';

const ExpanseDashboardComponent = () => (
    <div>
        <ExpanseSummary />
        <ExpanseListFilter />
        <div className="container">
         <ExpanseList />
        </div>
    </div>
);

export default ExpanseDashboardComponent;