import React from 'react';
import {connect} from 'react-redux';
import ExpanseForm from './expanse-form.component';
import {editExpanse} from '../actions/expanse-action';
import WarningModal from './modals/warning-popup.modal';
import SuccessModal from './modals/success-popup.modal';

class  EditExpanseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccess:false,
            isWarning:false,
            updatedExpanse:undefined,
            updatedProps:undefined
        }
    }

    closePopup = () => {
        this.setState(()=> ({isSuccess:false,
            isWarning:false}));
    }
    okPopup = () => {
        console.log(this.state);
        this.setState(()=> ({isSuccess:true,
            isWarning:false}));
            setTimeout(() => {
                this.state.updatedProps.dispatch(
                    editExpanse(
                        this.state.updatedProps.expanse.id,
                        this.state.updatedExpanse));
                this.state.updatedProps.history.push('/');
            }, 1000);

    }
    componentWillUnmount() {
        this.setState(()=> ({isSuccess:false,
            isWarning:false}));
    }
    render() {
        return (
            <div className="container">
               <ExpanseForm expanse={this.props.expanse} onSubmit={(expanse)=>{
                   console.log(expanse);
                   this.setState(()=> ({
                        isSuccess:false,
                        isWarning:true,
                       updatedExpanse:expanse,
                       updatedProps:this.props
                    }));
                }} 
               />
                <WarningModal 
                    isVisible={this.state.isWarning}
                    title='Warning' 
                    message='Are you sure? You want to update the expanse.' 
                    closePopup={this.closePopup}
                    okPopup={this.okPopup}
                />
                <SuccessModal 
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

export default connect(mapStateToProps)(EditExpanseComponent);