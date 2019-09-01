import React from 'react';
import ExpanseForm from './expanse-form.component';
import {addExpanse} from '../actions/expanse-action';
import {connect} from 'react-redux';

const AddExpanseComponent = (props) => (
    <div className="container">
        <h2>Add Expanse</h2>
        <hr />
        <ExpanseForm onSubmit={(expanse) => {
            props.dispatch(addExpanse(expanse));
            props.history.push('/');
        }}/>
    </div>
);


export default connect()(AddExpanseComponent);