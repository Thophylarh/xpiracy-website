import React from 'react';

const AppInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 w-[100%] mb-5 rounded  border border-gray-300 focus:outline-none focus:border-blue-500"
      style={{ color: '#000' }}
    />
  );
};

export default AppInput;
