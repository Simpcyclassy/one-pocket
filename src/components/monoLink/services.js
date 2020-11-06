import { BASE_URL } from './constants';

export const authService = async (id) => {
    const AUTH_ENDPOINT = `${BASE_URL}account/auth`;
    const parameters = {
        body: JSON.stringify(id),
        headers: {
            'mono-sec-key': process.env.REACT_APP_SECRET,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(AUTH_ENDPOINT, parameters);
    const data = await response.json();

    return data;
};
