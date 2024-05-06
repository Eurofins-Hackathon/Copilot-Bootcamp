import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid';

const AddPlaneButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-plane');
  };

  return (
    <button 
      onClick={handleClick} 
      className="flex items-center justify-center gap-2 px-4 py-2 mt-4 mb-4 text-amber-900 bg-amber-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
    >
      <PlusIcon className="w-5 h-5" />
      Add Plane
    </button>
  );
};

export default AddPlaneButton;