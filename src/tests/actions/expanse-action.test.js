import {expanses} from '../fixtures/expanses-data';
import {
    addExpanse,
    editExpanse,
    startEditExpanse,
    removeExpanse,
    startAddExpanse,
    setExpanses,
    startSetExpanses,
    startRemoveExpanse
} from '../../actions/expanse-action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expanseReducer from '../../reducers/expanse-reducer';

const createMockStore = configureMockStore([thunk]);
const uid = 'sometestuid';
const defaultAuthState = { auth: {uid} };


let originalTimeout=0;

beforeEach((done) => {
    const expansesData = {};
    expanses.forEach(({id, description, amount, note, createdAt}) => {
      expansesData[id] = {  description, amount, note, createdAt };
    });
    database.ref(`users/${uid}/expanses`).set(expansesData).then(()=> done());
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

test('should generate add expanse action object with expanse data', ()=>{
    const result = addExpanse(expanses[0]);
    expect(result).toEqual({
        type:'ADD_EXPANSE',
        expanse: expanses[0]
    });
});

test('should add expanse with provided data to database and store', (done)=>{
    const store = createMockStore(defaultAuthState);
    const expanseData = {
        description: 'mouse',
        amount: 250,
        note: '',
        createdAt: 2000
    };
    store.dispatch(startAddExpanse(expanseData)).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPANSE',
           expanse: {
               id:expect.any(String),
               ...expanseData
           }
       });
       return database.ref(`users/${uid}/expanses/${actions[0].expanse.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expanseData);
        done();
   });
});

test('should add expanse with default data to database and store', (done)=>{
    const store = createMockStore(defaultAuthState);
    const expanseDefaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpanse({})).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPANSE',
           expanse: {
               id:expect.any(String),
               ...expanseDefaultData
           }
       });
       return database.ref(`users/${uid}/expanses/${actions[0].expanse.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expanseDefaultData);
        done();
   });
});

test('should generate edit expanse action object', ()=>{
    const result = editExpanse(expanses[1].id, expanses[1]);
    expect(result).toEqual({
        type:'EDIT_EXPANSE',
        id:expanses[1].id,
        updatedExpanse: expanses[1]
    });
});

test('should generate remove expanse action object', ()=>{
    const result = removeExpanse({id:expanses[1].id});
    expect(result).toEqual({
        type:'REMOVE_EXPANSE',
        id:expanses[1].id
    });
});



test('should generate set expanses action object', ()=>{
    const result = setExpanses(expanses);
    expect(result).toEqual({
        type:'SET_EXPANSES',
       expanses
    });
});


test('should set expanses', ()=>{
    const action = {
        type:'SET_EXPANSES',
        expanses: [expanses[1]]
    };
    const state = expanseReducer(expanses,action);
    expect(state).toEqual([expanses[1]]);
});


test('should fetch the expanses from database', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpanses()).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'SET_EXPANSES',
           expanses
       });
       done();
    });
});


test('should remove expanse from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expanses[2].id;
    store.dispatch(startRemoveExpanse({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPANSE',
            id
        });
        return database.ref(`users/${uid}/expanses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should update expanse into firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expanses[2].id;
    const updatedExpanse = {
        description: 'updated rent',
        amount: 9500
    }
    store.dispatch(startEditExpanse(id,updatedExpanse)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPANSE',
            id,
            updatedExpanse
        });
        return database.ref(`users/${uid}/expanses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().description).toBe(updatedExpanse.description);
        expect(snapshot.val().amount).toBe(updatedExpanse.amount);
        done();
    });
});