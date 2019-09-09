import React from 'react';
import {connect} from 'react-redux';
import ExpanseForm from './expanse-form.component';
import {startEditExpanse} from '../actions/expanse-action';
import WarningModal from './modals/warning-popup.modal';
import SuccessModal from './modals/success-popup.modal';

export class  EditExpanseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccess:false,
            isWarning:false,
            id:undefined,
            updatedExpanse:undefined
        }
    }

    closePopup = () => {
        this.setState(() => ({isSuccess:false,isWarning:false}));
    }
    okPopup = () => {
        this.setState(()=> ({isSuccess:true,isWarning:false}));
        setTimeout(() => {
            this.props.startEditExpanse(this.state.id,this.state.updatedExpanse);
            this.props.history.push('/');
        }, 1000);
    }
    componentWillUnmount() {
        this.setState(()=> ({isSuccess:false, isWarning:false}));
    }
    onSubmit = (updatedExpanse) => {
        this.setState(()=> ({
             isSuccess:false,
             isWarning:true,
             id:this.props.expanse.id,
             updatedExpanse
         }));
    }
    render() {
        return (
            <div className="container">
               <ExpanseForm expanse={this.props.expanse} onSubmit={this.onSubmit} 
               />
                <WarningModal 
                    id="warningModal"
                    isVisible={this.state.isWarning}
                    title='Warning' 
                    message='Are you sure? You want to update the expanse.' 
                    closePopup={this.closePopup}
                    okPopup={this.okPopup}
                />
                <SuccessModal
                    id="SuccessModal" 
                    isVisible={this.state.isSuccess}
                    title='Success' 
                    message='Expanse updated sucessfuly.'
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expanse: state.expanses.find((expanse)=> expanse.id===props.match.params.id)
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpanse: (id,updatedExpanse) => dispatch(startEditExpanse(id,updatedExpanse))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditExpanseComponent);