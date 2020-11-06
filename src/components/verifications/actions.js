import { VERIFICATION_FAILURE, VERIFICATION_REQUEST, VERIFICATION_SUCCESS } from './actionTypes';

/**
 * Triggers request to verify a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.VERIFICATION_REQUEST VERIFICATION_REQUEST} action.
 */
export const verificationRequest = payload => ({
    payload,
    type: VERIFICATION_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {Object} The {@link actionTypes.VERIFICATION_SUCCESS VERIFICATION_SUCCESS} action.
 */
export const verificationSuccess = () => ({
    type: VERIFICATION_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.VERIFICATION_FAILURE VERIFICATION_FAILURE} action.
 */
export const verificationFailure = payload => ({
    payload,
    type: VERIFICATION_FAILURE,
});
