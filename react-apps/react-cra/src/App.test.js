import { render, screen } from '@testing-library/react';
import App from './App';

test('renders label text', () => {
  render(<App />);
  const linkElement = screen.getByText(/abel text/i);
  expect(linkElement).toBeInTheDocument();
});
