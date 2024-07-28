import { useState } from "react";

export const BookingForm = ({ onCreateBookingSubmit, airports }) => {
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

    const submitHandler = (e) => {
        e.preventDefault();
        onCreateBookingSubmit(bookingValues);
        setBookingValues({
            guest: '',
            departureAirport: '',
            destinationAirport: '',
            departureDate: '',
            dateOfReturn: '',
        });
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