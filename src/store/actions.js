
export const STORE_CUBOS = 'STORE_CUBOS';
export const STORE_TABLE_ADD = 'STORE_TABLE_ADD';
export const STORE_TABLE_REMOVE = 'STORE_TABLE_REMOVE';

export const SET_CUBO = 'SET_CUBO';

export const addTable = (columns) => ({
    type: STORE_TABLE_ADD,
    columnsSelected: columns
})

export const removeTable = () => ({
    type: STORE_TABLE_REMOVE
})

export const setCubo = (cubo) => ({
    type: SET_CUBO,
    cuboSelected: cubo
})

export const STORE_COLUMN = 'STORE_COLUMN';
export const STORE_COLUMN_ADD = 'STORE_COLUMN_ADD';
export const STORE_COLUMN_REMOVE = 'STORE_COLUMN_REMOVE';