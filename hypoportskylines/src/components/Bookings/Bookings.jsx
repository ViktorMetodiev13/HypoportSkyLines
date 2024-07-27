import "./bookings.css";

export const Bookings = () => {
    return (
        <div className="bookings">
            <form className="flight-form">
                <div className="flight-form-entries">
                    <div className="flight-form-entry">
                        <p>Guest</p>
                        <input type="text" placeholder="John Smith" className="flight-guest" />
                    </div>
                    <div className="flight-form-entry">
                        <p>Departure Airport</p>
                        <div>
                            <select name="from" id="from" className="flight-depature-airport">
                                <option value="">Please Select an airport</option>
                                <option value="">Sofia Airport</option>
                                <option value="">Amsterdam Airport Schiphol</option>
                                <option value="">Tokyo Haneda Airport</option>
                                <option value="">London Heathrow</option>
                                <option value="">Guangzhou Baiyun Airport</option>
                            </select>
                        </div>
                    </div>
                    <div className="flight-form-entry">
                        <p>Destination Airport</p>
                        <div>
                            <select name="from" id="from" className="flight-destination-airport">
                                <option value="">Please Select an airport</option>
                                <option value="">Sofia Airport</option>
                                <option value="">Amsterdam Airport Schiphol</option>
                                <option value="">Tokyo Haneda Airport</option>
                                <option value="">London Heathrow</option>
                                <option value="">Guangzhou Baiyun Airport</option>
                            </select>
                        </div>
                    </div>

                    <div className="flight-form-entry">
                        <p>Departure Date</p>
                        <input type="date" name="date" className="flight-departure-date" />
                    </div>

                    <div className="flight-form-entry">
                        <p>Date of Return</p>
                        <input type="date" name="date" className="flight-date-of-return" />
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