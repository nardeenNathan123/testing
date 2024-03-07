// ConditionalComponent.js
import React from 'react';

const ConditionalComponent = ({ condition, children }) => {
  return condition ? children : null;
};

export default ConditionalComponent;
