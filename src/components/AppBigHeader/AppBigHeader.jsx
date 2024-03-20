import React from 'react';

export default function AppBigHeader({ title, customClass }) {
  const combinedClassName = `text-2xl md:text-6xl font-semibold text-white md:w-[550px] ${customClass}`;

  return <div className={combinedClassName}>{title}</div>;
}
