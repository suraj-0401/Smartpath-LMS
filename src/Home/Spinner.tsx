import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#EAB8F1] border-t-transparent"></div>
    </div>
  );
};

export default Spinner; 