
// action - state management
import * as actionTypes from '../actions';

export const initialState = {
    defaultId: 'people',
    data:[]
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const peoplesReducer = (state = initialState, action:any) => {

    switch (action.type) {

        case actionTypes.PARSE_DATA:
            console.log(action.data)
            localStorage.setItem('peoples',JSON.stringify(action.data))
            return {
                ...state,
                data:action.data,
            };
        case actionTypes.LOAD_DATA:
            const peoples=localStorage.getItem('peoples');
            return {
                ...state,
                //@ts-ignore
                data:peoples?JSON.parse(peoples):[],
            };
        case actionTypes.DELETE_ALL_DATA:
            return initialState;

        default:
            return state;
    }
};

export default peoplesReducer;
