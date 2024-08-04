/* eslint-disable testing-library/no-wait-for-side-effects */
/**
 * @format
 */
import React from 'react';
import 'react-native';
import App from '../src/App';
import {render, screen, waitFor} from '@testing-library/react-native';
// Note: import explicitly to use the types shipped with jest.

it('renders correctly', async () => {
  await waitFor(() => {
    render(<App />);
  });
  expect(screen.getByText('Adicionar')).toBeTruthy();
});
