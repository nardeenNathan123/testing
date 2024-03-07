// Checkbox.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox toggles when clicked', () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(
    <Checkbox label="Test Checkbox" onChange={onChangeMock} />
  );

  const checkbox = getByLabelText('Test Checkbox');

  fireEvent.click(checkbox);

  expect(onChangeMock).toHaveBeenCalledWith(true);

  fireEvent.click(checkbox);

  expect(onChangeMock).toHaveBeenCalledWith(false);
});
