import { BASE_URL } from './constants';

export const authService = async (code) => {
    const ACCOUNT_ENDPOINT = `${BASE_URL}/account/auth`;

    const parameters = {
        body: JSON.stringify(code),
        headers: {
            'mono-sec-key': process.env.REACT_APP_SECRET,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(ACCOUNT_ENDPOINT, parameters);
    const data = await response.json();

    return data;
};
