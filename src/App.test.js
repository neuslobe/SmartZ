// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZKSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZKSync/i);
    expect(titleElement).toBeInTheDocument();
});
