import React from 'react';
import ExpanseForm from './expanse-form.component';
import {addExpanse} from '../actions/expanse-action';
import {connect} from 'react-redux';

export class  AddExpanseComponent extends React.Component{
    onSubmit = (expanse) => {
        this.props.addExpanse(expanse);
        this.props.history.push('/');
    }
    render() {
        return  (
            <div className="container">
                <h2>Add Expanse</h2>
                <hr />
                <ExpanseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    addExpanse: (expanse) => dispatch(addExpanse(expanse))
});

export default connect(undefined,mapDispatchToProps)(AddExpanseComponent);