import { SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    id: ''
};

const monoLinkReducers = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                id: payload
            };
        }

        default:
            return state;
    }
};

export default monoLinkReducers;