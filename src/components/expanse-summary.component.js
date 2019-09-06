import React from 'react';
import {connect} from 'react-redux';
import visibleExpanse from '../selectors/visible-expanses';
import totalExpanses from '../selectors/total-expanse-amount';
const currencyFormatter = require('currency-formatter');

const ExpanseSummary = (props) => {
 const expanseWord = props.count === 1 ? 'expanse' : 'expanses';
 const formattedAmount = currencyFormatter.format(props.total,{code:'INR'});
   return  (
        <div>
           {`Viewing ${props.count} ${expanseWord} totalling  ${formattedAmount}`}
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpansesList =  visibleExpanse(state.expanses,state.filters);
    return {
        count:visibleExpansesList.length,
        total: totalExpanses(visibleExpansesList)
    };
};

export default connect(mapStateToProps)(ExpanseSummary);