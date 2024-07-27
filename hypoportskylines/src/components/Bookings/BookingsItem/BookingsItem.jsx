import "./bookingsItem.css";

export const BookingsItem = ({
    firstName,
    lastName,
    arrivalAirportId,
    departureAirportId,
    departureDate,
    returnDate,
    id,
    onDelete
}) => {

    return (
        <tr>
            <td>{firstName} {lastName}</td>
            <td>{departureAirportId}</td>
            <td>{arrivalAirportId}</td>
            <td>{departureDate}</td>
            <td>{returnDate}</td>
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