import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from './actionTypes';

/**
 * Triggers request to verify a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.ACCOUNT_REQUEST ACCOUNT_REQUEST} action.
 */
export const accountRequest = payload => ({
    payload,
    type: ACCOUNT_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {Object} The {@link actionTypes.ACCOUNT_SUCCESS ACCOUNT_SUCCESS} action.
 */
export const accountSuccess = payload => ({
    type: ACCOUNT_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.ACCOUNT_FAILURE ACCOUNT_FAILURE} action.
 */
export const accountFailure = payload => ({
    payload,
    type: ACCOUNT_FAILURE,
});
