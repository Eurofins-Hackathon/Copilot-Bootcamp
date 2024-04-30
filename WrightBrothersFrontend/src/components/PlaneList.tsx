import React from "react";
import { useNavigate } from "react-router-dom";

type PlaneListProps = {
  planes: { id: number; name: string; }[];
};

const PlaneList: React.FC<PlaneListProps> = ({ planes }) => {
  const navigate = useNavigate();

  const handleClick = (planeId: any, event: any) => {
    navigate(`/planes/${planeId}`); 
  };

  return (
    <div>
      <ul>
        {planes.map((plane) => (
          <li
            key={plane.id}
            onClick={(e) => handleClick(plane.id, e)}
            className="flex flex-row items-center p-8 mb-4 cursor-pointer bg-amber-100 rounded-lg shadow-lg"
          >
             <img
                className="w-20 rounded-full mr-4"
                src="./wright-brothers-plane.png"
                alt={plane.name}
                style={{ filter: "sepia(1)" }}
              />{" "}
              <h3 className="text-amber-900 text-lg font-serif">
                {plane.name}
              </h3>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaneList;
