'use client';

import { FaSpinner } from 'react-icons/fa';

export default function Loading(){
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center">
        <FaSpinner className="animate-spin text-yellow-500 text-4xl mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-gray-700">Loading data...</h1>
        <p className="text-gray-500">Please wait while we fetch the information.</p>
      </div>
    </div>
  );
};


