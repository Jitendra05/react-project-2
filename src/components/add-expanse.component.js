import React from 'react';
import ExpanseForm from './expanse-form.component';
import {startAddExpanse} from '../actions/expanse-action';
import {connect} from 'react-redux';

export class  AddExpanseComponent extends React.Component{
    onSubmit = (expanse) => {
        this.props.startAddExpanse(expanse);
        this.props.history.push('/');
    }
    render() {
        return  (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h2 className="page-header__title">
                            Add Expense
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <ExpanseForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpanse: (expanse) => dispatch(startAddExpanse(expanse))
});

export default connect(undefined,mapDispatchToProps)(AddExpanseComponent);