
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Action Generator functions
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type:'INCREMENT',
//     incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//     type:'DECREMENT',
//     decrementBy
// });

// const resetCount = () => ({
//     type:'RESET'
// });

// const setCount = ({ count = 0 } = {}) => ({
//     type:'SET',
//     count
// });

// // Reducers
// // 1. pure function
// // 2. Never change state or action

// const countReducer = (state = { count:0 }, action)=> {
//     switch(action.type) {
//         case 'INCREMENT':
//          return {
//              count: state.count + action.incrementBy
//          }
//          case 'DECREMENT':
//          return {
//              count: state.count - action.decrementBy
//          }
//          case 'SET':
//          return {
//              count: action.count
//          }
//          case 'RESET':
//          return {
//              count: 0
//          }
//          default:
//            return state;
//     }
// }

// // Store
// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(()=> {
//     console.log(store.getState());
// });

// unsubscribe();
// store.dispatch(incrementCount({incrementBy:5}));
// store.dispatch(incrementCount());



// store.dispatch(resetCount());

// store.dispatch(decrementCount({decrementBy:10}));
// store.dispatch(decrementCount());

// // store.dispatch(setCount({count:101}));

// store.dispatch(setCount());

// ----------------------------------------------------------------------
// Redux expansify app
// ----------------------------------------------------------------------
console.log('Redux expansify app ...');

//Actions

//ADD_EXPANSE
const addExpanse = ({
    description='',
    note='',
    amount=0,
    createdAt=0
} = {}) => ({
type:'ADD_EXPANSE',
expanse: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
}
});

//EDIT_EXPANSE
const editExpanse = (id, updatedExpanse = {}) => ({
    type: 'EDIT_EXPANSE',
    id,
    updatedExpanse
});
 
//REMOVE_EXPANSE
const removeExpanse = ({id} = {}) => ({
    type:'REMOVE_EXPANSE',
    id
});

//SET_FILTER_TEXT
const setFilterText = (text='') => ({
    type: 'SET_FILTER_TEXT',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate=undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate=undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// Get Visible Expanses
const getVisibleExpanses = (expanses, {text, sortBy, startDate, endDate}) => {
    return expanses.filter((expanse) => {
        const startDateMatch = typeof startDate !== 'number' || expanse.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expanse.createdAt <= endDate;
        const textMatch = expanse.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{

        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
}
// dummy expanse app state
const state = {
    expanses:[
        {
            id: 'aaaxxddsdsd',
            description:'Aug rent',
            note:'Amount is paid to owner on 13th august 2019.',
            amount: 9000,
            createdAt: 0 
        }
    ],
    filters:{
        text:'rent',
        sortBy:'amount', // 'amount' or 'date'
        startDate:undefined,
        endDate:undefined
    }
};

const expansesReducer = (state = expansesReducerDefaultState, action)=> {
    // console.log(action);

    switch(action.type) {

        case 'ADD_EXPANSE':
            return [...state, action.expanse];

         case 'REMOVE_EXPANSE':
            return state.filter(({id}) => id !== action.id);

         case 'EDIT_EXPANSE':
          return state.map((expanse) => {
                if(action.id === expanse.id){
                    return {
                        ...expanse,
                        ...action.updatedExpanse
                    };
                } else {
                    return expanse;
                }
          });

         default:
           return state;
    }
};

const expansesReducerDefaultState = [];

const filtersReducer = (state = filtersReducerDefaultState, action)=> {
    switch(action.type) {

        case 'SET_FILTER_TEXT':
            return {...state, text:action.text};
        
        case 'SORT_BY_DATE':
            return {...state, sortBy:'date'};

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy:'amount'};
            
        case 'SET_START_DATE':
            return {...state, startDate:action.startDate};

        case 'SET_END_DATE':
            return {...state, endDate:action.endDate};
        
         default:
           return state;
    }
};

const filtersReducerDefaultState =  { 
    text:'', 
    sortBy:'amount', 
    startDate:undefined, 
    endDate:undefined 
}

const store = createStore( combineReducers({expanses: expansesReducer,filters:filtersReducer}));


const unsubscribe = store.subscribe(()=>{
    const state = store.getState();
    console.log(state.filters);
    console.log(getVisibleExpanses(state.expanses, state.filters));
});

// unsubscribe();

const expanseOne = store.dispatch(addExpanse({description:'Rent', amount:9000, createdAt:11000}));
const expanseTwo = store.dispatch(addExpanse({description:'Coffee', amount:30000, createdAt:1000}));

// console.log(expanseOne.expanse.id);
// store.dispatch(removeExpanse({id:expanseOne.expanse.id}));

// store.dispatch(editExpanse(expanseTwo.expanse.id, {description:'Black Coffee', amount:50}));


// store.dispatch(setFilterText('rent'));
// store.dispatch(setFilterText());
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());






