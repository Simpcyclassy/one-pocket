import { STATEMENT_FAILURE, STATEMENT_REQUEST, STATEMENT_SUCCESS } from './actionTypes';

const statements = JSON.parse(localStorage.getItem('statements'))

const initialState = {
    dataSource: statements,
    message: null
};

const accountReducers = (state = { ...initialState }, action) => {
    switch (action.type) {
        case STATEMENT_REQUEST: {
            return {
                ...state,
            };
        }
        case STATEMENT_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                dataSource: payload
            };
        }

        case STATEMENT_FAILURE: {
            const { payload } = action;
            return {
                ...state,
                message: payload
            };
        }

        default:
            return state;
    }
};

export default accountReducers;