import { useEffect, useState } from "react";
import { getAllBookings, createBooking, deleteBooking } from "../services/bookingService";

export const useBookings = () => {
    const [bookings, setBookings] = useState({ list: [], count: 0 });

    useEffect(() => {
        getAllBookings().then(result => {
            setBookings(result);
        });
    }, []);

    const addBooking = async (bookingModel) => {
        try {
            const newBooking = await createBooking(bookingModel);
            setBookings(prevState => ({
                list: [...prevState.list, newBooking],
                count: prevState.count + 1
            }));
        } catch (error) {
            console.log('An error occurred while trying to add the new booking!');
        }
    };

    const removeBooking = (id) => {
        deleteBooking(id).then(() => {
            setBookings(prevState => ({
                list: prevState.list.filter(booking => booking.id !== id),
                count: prevState.count - 1
            }));
        });
    };

    return { bookings, addBooking, removeBooking };
};