import * as actionTypes from '../actions';

const initialState = {
    columns: [],
    columnasSelected: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_COLUMN:
            return {
                ...state,
                columns: action.columns
            }
        default:
            return state;     
    }
};

export default reducer;