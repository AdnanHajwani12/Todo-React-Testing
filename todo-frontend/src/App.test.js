import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /welcome to the todo app/i });
  expect(headingElement).toBeInTheDocument();
});
