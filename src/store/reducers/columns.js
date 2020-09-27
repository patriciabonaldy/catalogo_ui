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
        case actionTypes.STORE_TABLE_ADD:
            return {
                ...state,
                columnasSelected: action.columnsSelected
            }    
        default:
            return state;     
    }
};

export default reducer;