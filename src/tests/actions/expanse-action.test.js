import uuid from 'uuid';
import {
    addExpanse,
    editExpanse,
    removeExpanse
} from '../../actions/expanse-action';

const expanseId = uuid();

const expanseData = {
    description:'Rent Bill',
    note:'this was august month rent',
    amount:9000,
    createdAt:1000,
}

test('should generate add expanse action object with default data', ()=>{
    const result = addExpanse();
    expect(result).toEqual({
        type:'ADD_EXPANSE',
        expanse: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    });
});

test('should generate add expanse action object with expanse data', ()=>{
    const result = addExpanse(expanseData);
    expect(result).toEqual({
        type:'ADD_EXPANSE',
        expanse: {
            ...expanseData,
            id:expect.any(String)
        }
    });
});

test('should generate remove expanse action object', ()=>{
    const result = editExpanse(expanseId, expanseData);
    expect(result).toEqual({
        type:'EDIT_EXPANSE',
        id:expanseId,
        updatedExpanse: expanseData
    });
});

test('should generate remove expanse action object', ()=>{
    const result = removeExpanse({id:expanseId});
    expect(result).toEqual({
        type:'REMOVE_EXPANSE',
        id:expanseId
    });
});


