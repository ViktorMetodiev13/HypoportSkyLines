import { AirportsList } from '../utils/types';

const BASE_URL = 'https://interview.fio.de/core-frontend/api';
const AUTH_TOKEN = 'dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU';

export const getAllAirports = async (): Promise<AirportsList> => {
    const response = await fetch(`${BASE_URL}/airports?authToken=${AUTH_TOKEN}`);
    const result: AirportsList = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch airports');
    };

    return result;
};