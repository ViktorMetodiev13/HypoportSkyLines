import { useEffect, useState } from "react";
import { getAllAirports } from "../services/ariportService";

export const useAirports = () => {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const result = await getAllAirports();
                setAirports(result);
            } catch (error) {
                console.error('Error fetching airports:', error);
            }
        };

        fetchAirports();
    }, []);

    return airports;
};