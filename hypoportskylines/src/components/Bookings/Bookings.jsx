import "./bookings.css";

import { BookingsItem } from "./BookingsItem/BookingsItem";
import { useAirports } from "../../hooks/useAirports";
import { useBookings } from "../../hooks/useBookings";
import { BookingForm } from "./BookingForm/BookingForm";

export const Bookings = () => {
    const airports = useAirports();
    const { bookings, addBooking, removeBooking } = useBookings();

    const onCreateBookingSubmit = (bookingValues) => {
        const [firstName, lastName] = bookingValues.guest.split(" ");
        const departureAirport = airports.find(airport => airport.title === bookingValues.departureAirport);
        const destinationAirport = airports.find(airport => airport.title === bookingValues.destinationAirport);

        const bookingModel = {
            firstName: firstName || "",
            lastName: lastName || "",
            departureAirportId: departureAirport ? departureAirport.id : null,
            arrivalAirportId: destinationAirport ? destinationAirport.id : null,
            departureDate: bookingValues.departureDate,
            returnDate: bookingValues.dateOfReturn,
        };

        addBooking(bookingModel);
    };

    return (
        <div className="bookings">
            <BookingForm onCreateBookingSubmit={onCreateBookingSubmit} airports={airports} />
            
            <table className="bookings-list">
                <thead>
                    <tr>
                        <th>Guest</th>
                        <th>Departure Airport</th>
                        <th>Destination Airport</th>
                        <th>Departure Date</th>
                        <th>Date of Return</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.list?.map(booking => (
                        <BookingsItem
                            key={booking.id}
                            {...booking}
                            onDelete={removeBooking}
                            airports={airports}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};