import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

export default class ExpanseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expanse ? props.expanse.description:'',
            amount:props.expanse ? props.expanse.amount.toString():'',
            note:props.expanse ? props.expanse.note:'',
            createdAt:props.expanse ? moment(props.expanse.createdAt):moment(),
            focused:false,
            error: ''
        };
    }


    onDescriptionChange = (e) => {
       const description = e.target.value;
       this.setState(()=>({description}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}));
        }
     }

     onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
     }

     onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error:'Please provide the descrption and amount.'}));
        } else {
            this.setState(()=>({error:''}));
            const expanse = {
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            };
            this.props.onSubmit(expanse);

        }
     }

    render() {
        return (
                <form className="from-view" onSubmit={this.onSubmit}>
                {this.state.error && <h4 className="form-error">{this.state.error}</h4>}
                <div className="text-label ">
                        <label>Description:</label>
                    </div>
                    <input 
                        type="text" 
                        autoFocus
                        className="text-input"
                        placeholder="Description" 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    
                    <div className="text-label ">
                        <label>Amount:</label>
                    </div>
                    <input 
                        type="number" 
                        className="text-input"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                   <div className="text-label ">
                        <label>Created At:</label>
                    </div>
                    <SingleDatePicker
                            date={this.state.createdAt} // momentPropTypes.momentObj or null
                            onDateChange={createdAt =>{
                                if(createdAt){
                                    this.setState({ createdAt })
                                }
                            }} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                            id="someid" // PropTypes.string.isRequired,
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                    />
                    <div className="text-label ">
                        <label>Note:</label>
                    </div>
                    <textarea 
                        placeholder="write a note on your expanse(optional)"
                        className="text-area"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <div>
                        <button className="large-button">Save Expense</button>
                    </div>
                </form>
        );
    }
}