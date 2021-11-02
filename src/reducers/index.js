import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, M_ADD, M_RECALL, M_CLEAR, STRETCH } from './../actions';

export const initialState = {
    input: 0,
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            })
        
        case(M_ADD):
            return ({
                ...state,
                memory: state.total
            });

        case(M_RECALL):
            return({
                ...state,
                total: state.memory
            })
            
        case(M_CLEAR):
            return({
                ...state,
                memory: 0
            })
        
        default:
            return state;
    }
}

export default reducer;