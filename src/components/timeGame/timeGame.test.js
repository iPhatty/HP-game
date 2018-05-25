import React from 'react';
import TimeGame from './timeGame';
import { renderIntoDocument, cleanup, fireEvent, waitForElement } from 'react-testing-library';

test('test TimeGame component win', (done) => {
    
    const { getByText, getByLabelText, getByTestId } = renderIntoDocument(
      <TimeGame />
    );
  
    const startButton = getByText('Start');
    fireEvent.click(startButton);

    jest.setTimeout(11000);
    setTimeout(() => {
        const stopButton = getByText('Stop');
        fireEvent.click(stopButton);

        const message = getByTestId('message')
        expect(message.textContent).toEqual("WOW you got it spot on!")
        done();
    }, 10000)
    
  })

  test('test TimeGame component', () => {
    
    const { getByText, getByLabelText, getByTestId } = renderIntoDocument(
      <TimeGame />
    );
  
    const startButton = getByText('Start');
    fireEvent.click(startButton);

    const stopButton = getByText('Stop');
    fireEvent.click(stopButton);

    const message =  getByTestId('message')
    expect(message.textContent).toBe('You went 10 seconds under');
    
  
  })