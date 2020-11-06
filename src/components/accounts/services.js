import { BASE_URL } from './constants';

export const accountService = async (code) => {
    const ACCOUNT_ENDPOINT = `${BASE_URL}/accounts/5f89d974f163762a1f63bceb`;

    const parameters = {
        body: JSON.stringify(code),
        headers: {
            'mono-sec-key': process.env.REACT_APP_SECRET,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(ACCOUNT_ENDPOINT, parameters);
    const data = await response.json();

    return data;
};
