import React from 'react';
import { renderIntoDocument, cleanup, fireEvent } from 'react-testing-library';
import Form from './form.js';

afterEach(cleanup);

test('form component', () => {
  const { getByText, getByLabelText, getByTestId } = renderIntoDocument(
    <Form />
  );

  const button = getByText('Submit');
  const input = getByLabelText('Enter your GitHub Username:');
  input.value = 'helenzhou6';
  fireEvent.change(input);
  fireEvent.click(button);
  const data = getByTestId('userData');
  expect(data.textContent).toBe(
    'Helen Zhou'
  )

})