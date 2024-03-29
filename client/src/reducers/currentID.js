import { SET_ID } from "../constants/actionTypes";

const currentIDReducer = (id = null, action) => {
    switch(action.type) {
        case SET_ID:
            return action.payload;
        default:
            return id;
    }
};

export default currentIDReducer;