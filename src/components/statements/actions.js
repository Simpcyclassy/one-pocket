import { STATEMENT_FAILURE, STATEMENT_REQUEST, STATEMENT_SUCCESS } from './actionTypes';

/**
 * Triggers request to verify a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.STATEMENT_REQUEST STATEMENT_REQUEST} action.
 */
export const statementRequest = payload => ({
    payload,
    type: STATEMENT_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {Object} The {@link actionTypes.STATEMENT_SUCCESS STATEMENT_SUCCESS} action.
 */
export const statementSuccess = payload => ({
    type: STATEMENT_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.STATEMENT_FAILURE STATEMENT_FAILURE} action.
 */
export const statementFailure = payload => ({
    payload,
    type: STATEMENT_FAILURE,
});
