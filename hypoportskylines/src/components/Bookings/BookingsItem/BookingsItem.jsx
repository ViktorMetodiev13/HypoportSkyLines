import "./bookingsItem.css";

import { formatDateForDisplay } from "../../../utils/formatDate";

export const BookingsItem = ({
    firstName,
    lastName,
    arrivalAirportId,
    departureAirportId,
    departureDate,
    returnDate,
    id,
    onDelete,
    airports
}) => {
    const departureAirport = airports.find(airport => airport.id === departureAirportId);
    const arrivalAirport = airports.find(airport => airport.id === arrivalAirportId);

    return (
        <tr>
            <td>{firstName} {lastName}</td>
            <td>{departureAirport?.title}</td>
            <td>{arrivalAirport?.title}</td>
            <td>{formatDateForDisplay(departureDate)}</td>
            <td>{formatDateForDisplay(returnDate)}</td>
            <td>
                <button
                    className="bookings-list-del-btn"
                    onClick={() => onDelete(id)}
                >
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    )
}