export interface Flight {
    id: number;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: Date;
    arrivalTime: Date;
    status: FlightStatus;
    fuelRange: number;
    fuelTankLeak: boolean;
    flightLogSignature: string;
    aerobaticSequenceSignature: string;
}
export enum FlightStatus {
    Scheduled = 'Scheduled',
    Boarding = 'Boarding',
    Departed = 'Departed',
    InAir = 'InAir',
    Landed = 'Landed',
    Cancelled = 'Cancelled',
    Delayed = 'Delayed'
}