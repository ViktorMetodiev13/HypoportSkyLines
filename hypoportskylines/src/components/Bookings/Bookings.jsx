import "./bookings.css";

import { useEffect, useState } from "react";

import { createBooking, getAllAirports } from "../../services/bookingService";

export const Bookings = () => {
    const [airports, setAirports] = useState([]);
    const [bookingValues, setBookingValues] = useState({
        'guest': '',
        'departureAirport': '',
        'destinationAirport': '',
        'departureDate': '',
        'dateOfReturn': '',
    });

    useEffect(() => {
        getAllAirports()
            .then(result => {
                setAirports(result);
            });
    }, []);

    const changeHandler = (e) => {
        setBookingValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onCreateBookingSubmit = (e) => {
        e.preventDefault();

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

        console.log(bookingModel);

        createBooking(bookingModel);
    };

    return (
        <div className="bookings">
            <form className="flight-form" onSubmit={onCreateBookingSubmit}>
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
                        <div>
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
                    </div>
                    <div className="flight-form-entry">
                        <p>Destination Airport</p>
                        <div>
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

            <table className="bookings-list">
                <thead>
                    <tr>
                        <th>Guest</th>
                        <th>Depature Airport</th>
                        <th>Destination Airport</th>
                        <th>Depature Date</th>
                        <th>Date of Return</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Viktor Metodiev</td>
                        <td>Sofia, Bulgaria</td>
                        <td>Tokyo, Japan</td>
                        <td>28/07/2024</td>
                        <td>28/07/2024</td>
                        <td><button className="bookings-list-del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                    <tr>
                        <td>Viktor Metodiev</td>
                        <td>Sofia, Bulgaria</td>
                        <td>Tokyo, Japan</td>
                        <td>28/07/2024</td>
                        <td>28/07/2024</td>
                        <td><button className="bookings-list-del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                    <tr>
                        <td>Viktor Metodiev</td>
                        <td>Sofia, Bulgaria</td>
                        <td>Tokyo, Japan</td>
                        <td>28/07/2024</td>
                        <td>28/07/2024</td>
                        <td><button className="bookings-list-del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}