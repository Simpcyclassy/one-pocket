import { VERIFICATION_FAILURE, VERIFICATION_REQUEST, VERIFICATION_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    isLoading: false,
    description: '',
    verified: '',
    status: "",
    referenceNo: ""
};

const verificationReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case VERIFICATION_REQUEST: {
            return {
                ...initialState,
                isLoading: true,
            };
        }

        case VERIFICATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case VERIFICATION_FAILURE: {
            const { payload } = action;

            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: payload,
            };
        }

        default:
            return state;
    }
};

export default verificationReducer