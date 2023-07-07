import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Music Festival Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Music Festival/i);
  expect(linkElement).toBeInTheDocument();
});
