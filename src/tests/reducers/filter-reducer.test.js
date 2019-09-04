import moment from 'moment';
import filtersReducer from '../../reducers/filter-reducer';

const filtersReducerDefaultState =  { 
    text:'', 
    sortBy:'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month') 
}

test('should generate default filter reducer object', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:''})).toEqual(filtersReducerDefaultState);
});

test('should generate filter reducer object with provided text', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:'SET_FILTER_TEXT',text:'Rent'}))
    .toEqual({ ...filtersReducerDefaultState,text:'Rent'});
});

test('should generate filter reducer object with sort by date', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:'SORT_BY_DATE'}))
    .toEqual(filtersReducerDefaultState);
});

test('should generate filter reducer object with sort by amount', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:'SORT_BY_AMOUNT'}))
    .toEqual({...filtersReducerDefaultState,sortBy:'amount'});
});

test('should generate filter reducer object with start date', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:'SET_START_DATE', startDate:moment(1000)}))
    .toEqual({...filtersReducerDefaultState,startDate:moment(1000)});
});

test('should generate filter reducer object with end date', ()=>{
    expect(filtersReducer(filtersReducerDefaultState,{type:'SET_END_DATE', endDate:moment(9000)}))
    .toEqual({...filtersReducerDefaultState,endDate:moment(9000)});
});