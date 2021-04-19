import { SET_ID } from "../constants/actionTypes";

export const setCurrentID = (id) => {
    return {type: SET_ID, payload: id};
};