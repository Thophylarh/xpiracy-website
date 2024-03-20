import React from 'react';

export default function AppBtn({ title, onClick, customClass, disabled }) {
  const combinedClassName = `text-white  bg-[#dc4a2b] cursor-pointer font-ppeiko rounded-[40px] p-4 hover:bg-[#f86d5a] text-sm  md:text-[16px] ${customClass}`;

  return (
    <button onClick={onClick} className={combinedClassName} disabled={disabled}>
      {title}
    </button>
  );
}
