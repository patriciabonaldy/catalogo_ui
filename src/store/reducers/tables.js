import * as actionTypes from '../actions';

export const initialState = {
    cubos: [],
    tablas: [],
    cuboSelected: {}
};

const cuboReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_CUBOS:
            return {
                ...state,
                cubos: action.cubos
            }
        case actionTypes.SET_CUBO:
            return {
                ...state,
                cuboSelected: action.cubo
            }    
        case actionTypes.STORE_TABLE_ADD:
            return {
                ...state,
                columnas: state.tablas.concat({id: action.id, value: action.tabla})
            }
        case actionTypes.STORE_TABLE_REMOVE:
            const persons = state.tablas.filter(tabla => tabla.id !== action.id)
            return {...state,
                       persons: persons
                    }  
        default:
            return state;    
    }
    
};

export default cuboReducer;