export default (state = expansesReducerDefaultState, action)=> {
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

          case 'SET_EXPANSES':
            return action.expanses;

         default:
           return state;
    }
};

const expansesReducerDefaultState = [];