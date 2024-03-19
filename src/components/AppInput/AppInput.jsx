import React from 'react';

const AppInput = ({ type, placeholder, value, onChange, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-3 w-[100%] mb-5 rounded border-[1px] focus:outline-none"
      style={{ color: '#000' }}
      {...rest}
    />
  );
};

export default AppInput;
