import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filter-action';
import {DateRangePicker} from 'react-dates';


export class ExpanseListFilterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate:props.filters.startDate,
            endDate:props.filters.endDate,
            focusedInput:null
        };
    }

    onTextChange = (e) => {
            this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if(e.target.value ==='date') {
            this.props.sorByDate();
        } else if(e.target.value ==='amount') {
            this.props.sortByAmount();
        }
    };

    onDateChange = ({startDate, endDate}) => {
        this.setState(()=>({startDate,endDate}));
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (focusedInput) => {
        this.setState(() => ({focusedInput}));
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="search on descption" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />  
            </div>
        );
    }
}  

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setFilterText(text)),
    sorByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
 });

export default connect(mapStateToProps,mapDispatchToProps)(ExpanseListFilterComponent);