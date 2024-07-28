import { useEffect, useState } from "react";
import { getAllAirports } from "../services/bookingService";

export const useAirports = () => {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        getAllAirports().then(result => {
            setAirports(result);
        });
    }, []);

    return airports;
};