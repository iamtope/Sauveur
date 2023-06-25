import {ADD_ITEM,DELETE_ITEM} from "../actionTypes/actionTypes.js";

export const addItem = () => {
    return {
        type: ADD_ITEM
    }
}

export const deleteItem = () => {
    return {
        type: DELETE_ITEM
    }
}