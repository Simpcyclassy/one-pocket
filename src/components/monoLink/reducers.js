import { SIGNIN_SUCCESS } from './actionTypes';

const id = localStorage.getItem('code');

const initialState = {
    code: id
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