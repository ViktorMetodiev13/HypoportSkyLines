import { useState, useEffect, useCallback } from "react";

import { getAllBookings, createBooking, deleteBooking } from "../services/bookingService";

type BookingItem = {
    id: number;
    firstName: string;
    lastName: string;
    departureAirportId: number;
    arrivalAirportId: number;
    departureDate: string;
    returnDate: string;
};

type BookingsResponse = {
    list: BookingItem[];
    totalCount: number;
};

export const useBookings = () => {
    const [bookings, setBookings] = useState<BookingsResponse>({
        list: [],
        totalCount: 0
    });
    const [page, setPage] = useState(0);

    const fetchBookings = useCallback(async () => {
        try {
            const result = await getAllBookings(page);
            setBookings(prev => ({
                list: page === 0 ? result.list : [...prev.list, ...result.list],
                totalCount: result.totalCount
            }));
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    }, [page]);

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPage(prev => prev + 1);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const addBooking = async (bookingModel: BookingItem) => {
        try {
            const newBooking = await createBooking(bookingModel);
            setBookings(prevState => ({
                list: [...prevState.list, newBooking],
                totalCount: prevState.totalCount + 1,
            }));
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    const removeBooking = async (id: number) => {
        try {
            await deleteBooking(id);
            setBookings(prevState => ({
                list: prevState.list.filter(booking => booking.id !== id),
                totalCount: prevState.totalCount - 1,
            }));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return { bookings, addBooking, removeBooking };
};