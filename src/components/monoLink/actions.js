import { SIGNIN_SUCCESS } from './actionTypes';

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

