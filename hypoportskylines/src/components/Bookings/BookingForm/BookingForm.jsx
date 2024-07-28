import { useState } from "react";

import { useAirports } from "../../../hooks/useAirports";

export const BookingForm = ({ onSubmit }) => {
    const airports = useAirports();
    const [bookingValues, setBookingValues] = useState({
        guest: '',
        departureAirport: '',
        destinationAirport: '',
        departureDate: '',
        dateOfReturn: '',
    });

    const changeHandler = (e) => {
        setBookingValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
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

            onSubmit(bookingModel);

            setBookingValues({
                guest: '',
                departureAirport: '',
                destinationAirport: '',
                departureDate: '',
                dateOfReturn: '',
            });
        } catch (error) {
            console.error('Error submitting booking form:', error);
        }
    };

    return (
        <form className="flight-form" onSubmit={submitHandler}>
            <div className="flight-form-entries">
                <div className="flight-form-entry">
                    <p>Guest</p>
                    <input
                        type="text"
                        placeholder="John Smith"
                        className="flight-guest"
                        name="guest"
                        value={bookingValues.guest}
                        onChange={changeHandler}
                    />
                </div>
                <div className="flight-form-entry">
                    <p>Departure Airport</p>
                    <select
                        name="departureAirport"
                        id="from"
                        className="flight-depature-airport"
                        value={bookingValues.departureAirport}
                        onChange={changeHandler}
                    >
                        <option value="">Please Select an airport</option>
                        {airports.map(airport =>
                            <option key={airport.id} value={airport.title}>
                                {airport.title}
                            </option>
                        )}
                    </select>
                </div>
                <div className="flight-form-entry">
                    <p>Destination Airport</p>
                    <select
                        name="destinationAirport"
                        id="to"
                        className="flight-destination-airport"
                        value={bookingValues.destinationAirport}
                        onChange={changeHandler}
                    >
                        <option value="">Please Select an airport</option>
                        {airports.map(airport =>
                            <option key={airport.id} value={airport.title}>
                                {airport.title}
                            </option>
                        )}
                    </select>
                </div>
                <div className="flight-form-entry">
                    <p>Departure Date</p>
                    <input
                        type="date"
                        name="departureDate"
                        className="flight-departure-date"
                        value={bookingValues.departureDate}
                        onChange={changeHandler}
                    />
                </div>
                <div className="flight-form-entry">
                    <p>Date of Return</p>
                    <input
                        type="date"
                        name="dateOfReturn"
                        className="flight-date-of-return"
                        value={bookingValues.dateOfReturn}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <button className="book-flight-form-btn">Book</button>
        </form>
    );
};