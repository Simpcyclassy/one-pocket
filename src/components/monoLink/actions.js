import { SIGNIN_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './actionTypes';

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {String} The {@link actionTypes.SIGNIN_SUCCESS SIGNIN_SUCCESS} action.
 */
export const signinSuccess = payload => ({
    payload,
    type: SIGNIN_SUCCESS,
});

/**
 * Triggers request to verify a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.AUTH_REQUEST AUTH_REQUEST} action.
 */
export const authRequest = payload => ({
    payload,
    type: AUTH_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {Object} The {@link actionTypes.AUTH_SUCCESS AUTH_SUCCESS} action.
 */
export const authSuccess = payload => ({
    type: AUTH_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.AUTH_FAILURE AUTH_FAILURE} action.
 */
export const authFailure = payload => ({
    payload,
    type: AUTH_FAILURE,
});

