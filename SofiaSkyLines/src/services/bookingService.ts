import { BookingsResponse, BookingModel } from '../utils/types';

const BASE_URL = 'https://interview.fio.de/core-frontend/api';
const AUTH_TOKEN = 'dcSPTXR7IQYtn2oMCfIAxvwNpOzGyU';

export const getAllBookings = async (pageIndex: number): Promise<BookingsResponse> => {
    const response = await fetch(`${BASE_URL}/bookings?pageIndex=${pageIndex}&pageSize=8&authToken=${AUTH_TOKEN}`);
    const result: BookingsResponse = await response.json();

    if (!Array.isArray(result.list)) {
        throw new Error("API response format unexpected");
    }

    if (!response.ok) {
        throw new Error('Failed to fetch bookings');
    }

    return result;
};

export const createBooking = async (bookingData: BookingModel) => {
    const response = await fetch(`${BASE_URL}/bookings/create?authToken=${AUTH_TOKEN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
        throw new Error('Failed to create booking');
    };

    const result = await response.json();

    return result;
};

export const deleteBooking = async (bookingId: number) => {
    const response = await fetch(`${BASE_URL}/bookings/delete/${bookingId}?authToken=${AUTH_TOKEN}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete booking');
    };
};