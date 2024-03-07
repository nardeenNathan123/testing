// Checkbox.js
import React, { useState } from 'react';

const Checkbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
