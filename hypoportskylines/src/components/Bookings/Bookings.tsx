import "./bookings.css";

import React from "react";

import { BookingForm } from "./BookingForm/BookingForm";
import { BookingsTable } from "./BookingsTable/BookingsTable";
import { useBookings } from "../../hooks/useBookings";
import { useAirports } from "../../hooks/useAirports";

import { BookingItem } from "../../utils/types";

export const Bookings : React.FC = () => {
    const airports = useAirports();
    const { bookings, addBooking, removeBooking } = useBookings();

    const handleBookingSubmit = async (bookingModel: BookingItem) => {
        try {
            await addBooking(bookingModel);
        } catch (error) {
            console.error('Error handling booking submit:', error);
        };
    };

    return (
        <div className="bookings">
            <BookingForm onSubmit={handleBookingSubmit} />
            <BookingsTable
                bookings={bookings.list}
                airports={airports}
                onDelete={removeBooking}
            />
        </div>
    );
};