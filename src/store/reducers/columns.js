import * as actionTypes from '../actions';

const initialState = {
    columnas: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_COLUMN:
            return {
                ...state,
                columnas: state.columnas.concat({id: new Date(), value: action.columna})
            }
        default:
            return state;     
    }
};

export default reducer;