import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello, React!/i);
  expect(linkElement).toBeInTheDocument();
});
