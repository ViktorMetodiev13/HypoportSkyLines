import { useEffect, useState } from "react";

import { getAllAirports } from "../services/ariportService";

import { AirportsList } from '../utils/types';

export const useAirports = () => {
    const [airports, setAirports] = useState<AirportsList>([]);

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