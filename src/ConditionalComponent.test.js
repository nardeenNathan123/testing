// ConditionalComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ConditionalComponent from './ConditionalComponent';

test('renders children if condition is true', () => {
  const { getByText } = render(
    <ConditionalComponent condition={true}>
      <div>Rendered if condition is true</div>
    </ConditionalComponent>
  );
  const renderedText = getByText('Rendered if condition is true');
  expect(renderedText).toBeInTheDocument();
});

test('does not render children if condition is false', () => {
  const { queryByText } = render(
    <ConditionalComponent condition={false}>
      <div>Rendered if condition is true</div>
    </ConditionalComponent>
  );
  const renderedText = queryByText('Rendered if condition is true');
  expect(renderedText).not.toBeInTheDocument();
});
