import { VERIFICATION_FAILURE, VERIFICATION_REQUEST, VERIFICATION_SUCCESS } from './actionTypes';

const initialState = {
};

const verificationReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case VERIFICATION_REQUEST: {
            return {
                ...initialState,
            };
        }

        case VERIFICATION_SUCCESS: {
            return {
                ...state,
            };
        }

        case VERIFICATION_FAILURE: {

            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default verificationReducer