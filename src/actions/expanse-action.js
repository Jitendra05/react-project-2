import uuid from 'uuid';

// ADD_EXPANSE
export const addExpanse = ({
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

// EDIT_EXPANSE
export const editExpanse = (id, updatedExpanse = {}) => ({
    type: 'EDIT_EXPANSE',
    id,
    updatedExpanse
});
 
// REMOVE_EXPANSE
export const removeExpanse = ({id} = {}) => ({
    type:'REMOVE_EXPANSE',
    id
});
