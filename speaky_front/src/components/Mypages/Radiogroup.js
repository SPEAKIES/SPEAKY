import React from 'react';

export default function Radiogroup({ label, children }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}
