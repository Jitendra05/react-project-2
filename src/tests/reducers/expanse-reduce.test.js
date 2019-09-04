import expansesReducer from '../../reducers/expanse-reducer';
import moment from 'moment';
import uuid from 'uuid';

const expansesReducerDefaultState = [];
let expanses = [];

test('should generate default expanses reducer object', ()=>{
    expect(expansesReducer(expansesReducerDefaultState,{type:''}))
    .toEqual(expansesReducerDefaultState);
});

const expanseId = uuid();
test('should add expanse in expanses reducer object', ()=>{
    const expanse = {
        id:expanseId,
        description:'rent',
        note:'',
        amount:9000,
        createdAt: moment(1000)
    }
    expect(expansesReducer(expansesReducerDefaultState,{type:'ADD_EXPANSE',expanse}))
    .toEqual([...expansesReducerDefaultState,expanse]);
});

test('should update expanse in expanses reducer object', ()=>{
    const expanse = {
        id:expanseId,
        description:'rent',
        note:'',
        amount:9000,
        createdAt: moment(1000)
    }
    expanses = [...expansesReducerDefaultState,expanse];

    const updatedExpanse = {
        id:expanseId,
        description:'water',
        note:'',
        amount:8000,
        createdAt: moment(5000)
    }
    expect(expansesReducer(expanses,{type:'EDIT_EXPANSE',updatedExpanse}))
    .toEqual([...expanses]);
});


test('should remove expanse from expanses reducer object', ()=>{
    const expanse = {
        id:expanseId,
        description:'rent',
        note:'',
        amount:9000,
        createdAt: moment(1000)
    }
    expanses = [...expansesReducerDefaultState,expanse];

    expect(expansesReducer(expanses,{type:'REMOVE_EXPANSE',id:expanseId}))
    .toEqual([]);
});