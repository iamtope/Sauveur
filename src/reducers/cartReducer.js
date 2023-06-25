import {ADD_ITEM, DELETE_ITEM}  from "../actionTypes/actionTypes.js";

const initialState = {
    numberOfItems: 0,
}

const cartReducer = (state = initialState, action)  =>{
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1
            }
        case DELETE_ITEM:
            return {
                ...state,
                numberOfItems: state.numberOfItems - 1
            }
        default:
            return state;
    }
}

export default cartReducer;