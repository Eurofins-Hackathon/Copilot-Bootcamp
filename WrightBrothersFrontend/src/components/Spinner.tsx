import { Airplane } from "./Airplane";

function Spinner() {
    return (
        <div className="rotate-slow" role="status">
           <Airplane />
        </div>
    );
}

export default Spinner;