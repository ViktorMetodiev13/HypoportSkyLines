export type BookingItem = {
    id: number;
    firstName: string;
    lastName: string;
    departureAirportId: number;
    arrivalAirportId: number;
    departureDate: string;
    returnDate: string;
};

export type BookingsResponse = {
    list: BookingItem[];
    totalCount: number;
};

export type BookingData = {
    firstName: string;
    lastName: string;
    departureAirportId: number;
    arrivalAirportId: number;
    departureDate: string;
    returnDate: string;
};

export type AirportItem = {
    id: number,
    code: string,
    title: string,
};

export type AirportsList = AirportItem[];