import "./bookingForm.css";

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

    const [errors, setErrors] = useState({
        guest: '',
        departureAirport: '',
        destinationAirport: '',
        departureDate: '',
        dateOfReturn: '',
    });

    const validate = () => {
        let valid = true;
        let errors = {};

        // Validate guest
        if (!bookingValues.guest) {
            errors.guest = 'Please enter a value';
            valid = false;
        } else {
            const nameParts = bookingValues.guest.trim().split(" ");
            if (nameParts.length < 2) {
                errors.guest = 'Please enter first and last name';
                valid = false;
            }
        }

        // Validate airports
        if (!bookingValues.departureAirport) {
            errors.departureAirport = 'Please select an airport';
            valid = false;
        }
        
        if (bookingValues.departureAirport === bookingValues.destinationAirport) {
            errors.destinationAirport = 'Departure Airport and Destination Airport should be different';
            valid = false;
        };

        if (!bookingValues.destinationAirport) {
            errors.destinationAirport = 'Please select an airport';
            valid = false;
        }

        // Validate dates
        const today = new Date().toISOString().split("T")[0];

        if (!bookingValues.departureDate) {
            errors.departureDate = 'Please enter a value';
            valid = false;
        } else if (bookingValues.departureDate < today) {
            errors.departureDate = 'Invalid date selection';
            valid = false;
        }

        if (!bookingValues.dateOfReturn) {
            errors.dateOfReturn = 'Please enter a value';
            valid = false;
        } else if (bookingValues.dateOfReturn <= bookingValues.departureDate) {
            errors.dateOfReturn = 'Invalid date selection';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const changeHandler = (e) => {
        setBookingValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (validate()) {
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
        }
    };

    return (
        <form className="flight-form" onSubmit={submitHandler}>
            <div className="flight-form-entries">
                <div className="flight-form-entry">
                    <p className="flight-form-entry-title">Guest</p>
                    <input
                        type="text"
                        placeholder="John Smith"
                        className="flight-guest"
                        name="guest"
                        value={bookingValues.guest}
                        onChange={changeHandler}
                    />
                    {errors.guest && <p className="error-text">{errors.guest}</p>}
                </div>
                <div className="flight-form-entry">
                    <p className="flight-form-entry-title">Departure Airport</p>
                    <select
                        name="departureAirport"
                        id="from"
                        className="flight-departure-airport"
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
                    {errors.departureAirport && <p className="error-text">{errors.departureAirport}</p>}
                </div>
                <div className="flight-form-entry">
                    <p className="flight-form-entry-title">Destination Airport</p>
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
                    {errors.destinationAirport && <p className="error-text">{errors.destinationAirport}</p>}
                </div>
                <div className="flight-form-entry">
                    <p className="flight-form-entry-title">Departure Date</p>
                    <input
                        type="date"
                        name="departureDate"
                        className="flight-departure-date"
                        value={bookingValues.departureDate}
                        onChange={changeHandler}
                    />
                    {errors.departureDate && <p className="error-text">{errors.departureDate}</p>}
                </div>
                <div className="flight-form-entry">
                    <p className="flight-form-entry-title">Date of Return</p>
                    <input
                        type="date"
                        name="dateOfReturn"
                        className="flight-date-of-return"
                        value={bookingValues.dateOfReturn}
                        onChange={changeHandler}
                    />
                    {errors.dateOfReturn && <p className="error-text">{errors.dateOfReturn}</p>}
                </div>
            </div>
            <button className="book-flight-form-btn">Book</button>
        </form>
    );
};