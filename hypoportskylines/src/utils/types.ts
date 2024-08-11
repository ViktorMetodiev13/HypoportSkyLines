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

export type BookingModel = {
    firstName: string;
    lastName: string;
    departureAirportId: number;
    arrivalAirportId: number;
    departureDate: string;
    returnDate: string;
};

export type BookingFormValues = {
    guest: string;
    departureAirport: string;
    destinationAirport: string;
    departureDate: string;
    dateOfReturn: string;
}

export type AirportItem = {
    id: number,
    code: string,
    title: string,
};

export type AirportsList = AirportItem[];