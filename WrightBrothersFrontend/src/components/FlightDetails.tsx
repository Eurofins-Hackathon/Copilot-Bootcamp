import { Flight } from '../services/Flight';

interface FlightDetailsProps {
    flight: Flight;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flight }) => {
    return (
        <div>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Flight Number: {flight.flightNumber}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Origin: {flight.origin}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Destination: {flight.destination}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Departure Time: {flight.departureTime.toString()}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Arrival Time: {flight.arrivalTime.toString()}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Status: {flight.status}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Fuel Range: {flight.fuelRange}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Fuel Tank Leak: {flight.fuelTankLeak ? 'Yes' : 'No'}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Flight Log Signature: {flight.flightLogSignature}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Aerobatic Sequence Signature: {flight.aerobaticSequenceSignature}</p>
        </div>
    );
}

export default FlightDetails;