import { SIGNIN_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './actionTypes';

const code = localStorage.getItem('code');
const id = localStorage.getItem('id');
const initialState = {
    code: code,
    id: id,
    info: null
};

const monoLinkReducers = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                code: payload
            };
        }

        case AUTH_REQUEST: {
            return {
                ...state,
            };
        }
        case AUTH_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                id: payload,
                info: "Authorisation successful"
            };
        }

        case AUTH_FAILURE: {
            const { payload } = action;
            return {
                ...state,
                info: payload
            };
        }

        default:
            return state;
    }
};

export default monoLinkReducers;