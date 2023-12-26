
// action - state management
import * as actionTypes from '../actions';

export const initialState = {
    defaultId: 'modal',
    opened: false,
    data:{}
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const modalReducer = (state = initialState, action:any) => {
    switch (action.type) {

        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                data:action.data,
                opened: true
            };
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                data:{},
                opened: false
            };

        default:
            return state;
    }
};

export default modalReducer;
