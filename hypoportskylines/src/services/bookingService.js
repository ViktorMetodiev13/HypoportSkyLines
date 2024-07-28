const BASE_URL = 'https://interview.fio.de/core-frontend/api';
const AUTH_TOKEN = 'dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU';

export const getAllBookings = async () => {
    const response = await fetch(`${BASE_URL}/bookings?pageIndex=0&pageSize=10&authToken=${AUTH_TOKEN}`);
    const result = await response.json();

    return result;
};

export const createBooking = async (bookingData) => {
    const response = await fetch(`${BASE_URL}/bookings/create?authToken=${AUTH_TOKEN}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    return result;
};

export const deleteBooking = async (bookingId) => {
    const response = await fetch(`${BASE_URL}/bookings/delete/${bookingId}?authToken=${AUTH_TOKEN}`, {
        method: 'DELETE',
    });
};