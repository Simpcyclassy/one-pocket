
export const bvnService = async (userData) => {
    const BVN_ENDPOINT = 'https://app.verified.ng/sfx-verify/v2/frsc';

    const parameters = {
        body: JSON.stringify(userData),
        headers: {
            'api-key': process.env.REACT_APP_API_KEY,
            'userid': process.env.REACT_APP_USER_ID,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(BVN_ENDPOINT, parameters);
    const data = await response.json();

    return data;
};
