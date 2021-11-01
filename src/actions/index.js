export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_ADD = 'M_ADD';
export const M_RECALL = 'M_RECALL';
export const M_CLEAR = 'M_CLEAR';

export const addOne = () => {
    return({type:ADD_ONE});
}
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (operator) =>{
    return({type:CHANGE_OPERATION, payload: operator});
}
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}
export const mAdd = () => {
    return ({type: M_ADD})
}
export const mRecall = () => {
    return ({type: M_RECALL})
}
export const mClear = () => {
    return ({type: M_CLEAR})
}
