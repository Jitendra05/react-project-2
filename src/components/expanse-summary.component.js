import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import visibleExpanse from '../selectors/visible-expanses';
import totalExpanses from '../selectors/total-expanse-amount';
const currencyFormatter = require('currency-formatter');

const ExpanseSummary = (props) => {
 const expanseWord = props.count === 1 ? 'expense' : 'expenses';
 const isHidden = props.hiddenCount > 0;
 const formattedAmount = currencyFormatter.format(props.total,{code:'INR'});
   return  (
       <div className="page-header">
            <div className="container">
                <h2 className="page-header__title">
                    Viewing <span>{props.count}</span> {expanseWord} totalling <span>{formattedAmount}</span>
                    {isHidden && <div className="hidden-message">There are <span>{props.hiddenCount}</span> hidden expenses, clear the filters to view all.</div>}
                </h2>
                <div className="page-header__actions">
                    <Link className="large-button" to="/add">
                        Add Expense
                    </Link>
                </div>
            </div>
       </div>
       
    );
}

const mapStateToProps = (state) => {
    const visibleExpansesList =  visibleExpanse(state.expanses,state.filters);
    return {
        count:visibleExpansesList.length,
        total: totalExpanses(visibleExpansesList),
        hiddenCount: state.expanses.length - visibleExpansesList.length
    };
};

export default connect(mapStateToProps)(ExpanseSummary);