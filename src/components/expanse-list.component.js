import React from 'react';
import {connect} from 'react-redux';
import ExpanseTable from './expanse-table.component';
import visibleExpanse from '../selectors/visible-expanses';

const ExpanseList = (props) => (
    <div>
        <ExpanseTable expanses={props.expanses} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        expanses: visibleExpanse(state.expanses, state.filters)
    } ;
}

export default connect(mapStateToProps)(ExpanseList);