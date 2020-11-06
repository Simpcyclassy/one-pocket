
export const bvnService = async (userData) => {
    const BVN_ENDPOINT = '{{BASE_URL}}/inquiry/api/sacctinq/bvn/wrapper';

    const parameters = {
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(BVN_ENDPOINT, parameters);
    const data = await response.json();

    return data;
};
