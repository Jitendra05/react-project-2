import moment from 'moment';
import {
    setFilterText,
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate
} from '../../actions/filter-action';

test('should generte set filter text action object with defual value', ()=>{
    expect(setFilterText()).toEqual({
        type: 'SET_FILTER_TEXT',
        text:''
    });
});

test('should generte set filter text action object with provided value', ()=>{
    expect(setFilterText('rent')).toEqual({
        type: 'SET_FILTER_TEXT',
        text:'rent'
    });
});

test('should generte sort by amount filter action object', ()=>{
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generte sort by date filter action object', ()=>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generte start date filter action object', ()=>{
    const startDate = moment(1000);
    expect(setStartDate(startDate)).toEqual({
        type: 'SET_START_DATE',
        startDate
     });
});

test('should generte end date filter action object', ()=>{
    const endDate = moment(9000);
    expect(setEndDate(endDate)).toEqual({
        type: 'SET_END_DATE',
        endDate
     });
});



