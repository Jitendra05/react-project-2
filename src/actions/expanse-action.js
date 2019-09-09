import database from '../firebase/firebase';

// ADD_EXPANSE
export const addExpanse = (expanse) => ({
    type:'ADD_EXPANSE',
    expanse
});

export const startAddExpanse = (expanseData = {}) => {
  return (dispatch) => {
    const {
        description='',
        note='',
        amount=0,
        createdAt=0
    } = expanseData;
    const expanse = { description, note, amount, createdAt};
    return database.ref('expanses').push(expanse).then((snapshot)=>{
        dispatch(addExpanse({
            id: snapshot.key,
            ...expanse
        }));
    });
  };
};

// SET EXPANSE
export const setExpanses = (expanses) => ({
    type:'SET_EXPANSES',
    expanses
});

export const startSetExpanses = () => {
  return (dispatch) => {
    return database.ref('expanses').once('value').then((snapshot)=>{
        const expanseList = [];
        snapshot.forEach((child) => {
            expanseList.push({
               id: child.key,
               ...child.val()
           });
        });
        dispatch(setExpanses(expanseList));
    });
  };
};

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
