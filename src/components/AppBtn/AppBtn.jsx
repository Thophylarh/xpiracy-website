import React from 'react';

export default function AppBtn({ title, onClick, customClass, disabled }) {
  const combinedClassName = `text-white mt-5 bg-[#E93C24] cursor-pointer font-ppeiko rounded-[40px] p-4 hover:bg-[#f86d5a] ${customClass}`;

  return (
    <button onClick={onClick} className={combinedClassName} disabled={disabled}>
      {title}
    </button>
  );
}
