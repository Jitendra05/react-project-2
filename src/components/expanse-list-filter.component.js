import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filter-action';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpanseListFilterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate:props.filters.startDate,
            endDate:props.filters.endDate,
            focusedInput:null
        };
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search on descption" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setFilterText(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if(e.target.value ==='date') {
                        this.props.dispatch(sortByDate());
                    } else if(e.target.value ==='amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        this.setState(()=>({startDate,endDate}));
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                        } // PropTypes.func.isRequired,
                    }
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    
                />  
            </div>
        );
    }
}  

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    } ;
}

export default connect(mapStateToProps)(ExpanseListFilterComponent);