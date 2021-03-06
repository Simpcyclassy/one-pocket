import { BASE_URL } from './constants';

const id = localStorage.getItem('id');

export const accountService = async () => {
    const ACCOUNT_ENDPOINT = `${BASE_URL}accounts/${id}`;

    const parameters = {
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
