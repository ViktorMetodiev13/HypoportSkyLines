const BASE_URL = 'https://interview.fio.de/core-frontend/api';
// const AUTH_TOKEN = 'dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU';

export const getAllAirports = async () => {
    const response = await fetch(`${BASE_URL}/airports`);
    const result = await response.json();

    return result;
};

export const getAllBookings = async () => {
    const response = await fetch();
    const result = await response.json();

    return result;
}

export const createBooking = async (bookingData) => {
    const response = await fetch(`https://interview.fio.de/core-frontend/api/bookings/create?authToken=dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': AUTH_TOKEN,
        },
        body: JSON.stringify(bookingData),     
    });

    // if (response.status === 401) {
    //     return {};
    // };

    const result = await response.json();

    // if (!response.ok) {
    //     throw result;
    // };

    return result;
};