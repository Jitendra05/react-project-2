import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpanseListFilterComponent} from '../../components/expanse-list-filter.component';
import {filters, altFilters} from '../fixtures/filters-data';

let setFilterTextSpy, 
    sortByDateSpy, 
    sortByAmountSpy, 
    setStartDateSpy, 
    setEndDateSpy, 
    wrapper;

beforeEach(()=>{
    setFilterTextSpy =  jest.fn();
    sortByDateSpy =  jest.fn();
    sortByAmountSpy =  jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
  wrapper = shallow(
  <ExpanseListFilterComponent 
        filters={filters} 
        setTextFilter={setFilterTextSpy}
        sorByDate={sortByDateSpy}
        sortByAmount={sortByAmountSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
    />
  );
});

test('Should render ExpanseListFilterComponent correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});


test('Should render ExpanseListFilterComponent with filters data correctly',()=>{
    wrapper.setProps({ filters:altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change',()=>{
    const value = 'bill';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(setFilterTextSpy).toHaveBeenLastCalledWith(value);
});

test('Should sort by date',()=>{
    const value = 'date';
    wrapper.setProps({ filters:altFilters});
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('Should sort by amount',()=>{
    const value = 'amount';
    wrapper.setProps({filters});
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('Should handle date change',()=>{
   const startDate = moment(0).add(1,"years");
   const endDate =  moment(0).add(10,"years");  
   wrapper.find('#datePicker').prop('onDatesChange')({startDate, endDate});
   expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
   expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});


test('Should handle date focus change',()=>{
   const focusedData = 'endDate';
   wrapper.find('#datePicker').prop('onFocusChange')(focusedData);
   expect(wrapper.state('focusedInput')).toBe(focusedData);
});