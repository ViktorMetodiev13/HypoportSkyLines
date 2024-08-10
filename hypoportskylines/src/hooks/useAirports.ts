import { useEffect, useState } from "react";

import { getAllAirports } from "../services/ariportService";

type AirportItem = {
    id: number,
    code: string,
    title: string,
}

type AirportsList = {
    setAirports: React.Dispatch<React.SetStateAction<AirportItem[]>>;
}

export const useAirports = () => {
    const [airports, setAirports] = useState<AirportsList | []>([]);

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const result = await getAllAirports();
                setAirports(result);
            } catch (error) {
                console.error('Error fetching airports:', error);
            };
        };

        fetchAirports();
    }, []);

    return airports;
};