import React from 'react';

export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}) {
  return (
    <label>
      <input
        type="radio"
        id="target_btn"
        value={value}
        name={name}
        disabled={disabled}
      />
      {children}
    </label>
  );
}
