import { useEffect, useState } from "react";
import { getAllBookings, createBooking, deleteBooking } from "../services/bookingService";

export const useBookings = () => {
    const [bookings, setBookings] = useState({ 
        list: [], 
        count: 0
    });

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const result = await getAllBookings();
                setBookings(result);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const addBooking = async (bookingModel) => {
        try {
            const newBooking = await createBooking(bookingModel);
            setBookings(prevState => ({
                list: [...prevState.list, newBooking],
                count: prevState.count + 1,
            }));
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    const removeBooking = async (id) => {
        try {
            await deleteBooking(id);
            setBookings(prevState => ({
                list: prevState.list.filter(booking => booking.id !== id),
                count: prevState.count - 1,
            }));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return { bookings, addBooking, removeBooking };
};