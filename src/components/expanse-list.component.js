import React from 'react';
import {connect} from 'react-redux';
import ExpanseTable from './expanse-table.component';
import visibleExpanse from '../selectors/visible-expanses';

export const ExpanseList = (props) => (
    <div>
        {props.expanses.length===0 ? (
            <h3>No expanses</h3>
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