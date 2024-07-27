const BASE_URL = 'https://interview.fio.de/core-frontend/api';

export const getAllAirports = async () => {
    const response = await fetch(`${BASE_URL}/airports`);
    const result = await response.json();

    return result;
};