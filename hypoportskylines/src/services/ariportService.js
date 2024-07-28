const BASE_URL = 'https://interview.fio.de/core-frontend/api';
const AUTH_TOKEN = 'dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU';

export const getAllAirports = async () => {
    const response = await fetch(`${BASE_URL}/airports?authToken=${AUTH_TOKEN}`);
    const result = await response.json();

    return result;
};