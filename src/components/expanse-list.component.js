import React from 'react';
import {connect} from 'react-redux';
import ExpanseTable from './expanse-table.component';
import visibleExpanse from '../selectors/visible-expanses';

export const ExpanseList = (props) => (
    <div>
        {props.expanses.length===0 ? (
            <div className="container">
                <h3 className="table-heading">Please add your expenses.</h3>
            </div>
        ):
        (
            <ExpanseTable expanses={props.expanses} />
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expanses: visibleExpanse(state.expanses, state.filters)
    } ;
}

export default connect(mapStateToProps)(ExpanseList);