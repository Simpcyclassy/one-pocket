import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from './actionTypes';

const account = JSON.parse(localStorage.getItem('account'))

const initialState = {
    name: account.name,
    accountNumber: account.accountNumber,
    currency: account.currency,
    balance: account.balance,
    type: account.type,
    institutionName: account.institution.name,
    message: null
};

const accountReducers = (state = { ...initialState }, action) => {
    switch (action.type) {
        case ACCOUNT_REQUEST: {
            return {
                ...state,
            };
        }
        case ACCOUNT_SUCCESS: {
            const { name, accountNumber, currency, balance, type, institution } = action.payload;
            return {
                ...state,
                name,
                accountNumber,
                currency,
                balance,
                type,
                institutionName: institution.name
            };
        }

        case ACCOUNT_FAILURE: {
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