import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('PREMIUM FITNESS CHAPTER 1.O - Core Requirements Suite', () => {
  test('renders Premium Fitness Chapter 1.O branding', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/PREMIUM/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  test('prominently highlights Gym Owner Muhammad Ali', () => {
    render(<App />);
    const ownerElements = screen.getAllByText(/Muhammad Ali/i);
    expect(ownerElements.length).toBeGreaterThan(0);
  });

  test('enforces Sunday Strictly Closed policy', () => {
    render(<App />);
    const closedElements = screen.getAllByText(/CLOSED/i);
    expect(closedElements.length).toBeGreaterThan(0);
  });

  test('renders all essential navigation anchor targets', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#facilities')).toBeInTheDocument();
    expect(container.querySelector('#timings')).toBeInTheDocument();
    expect(container.querySelector('#pricing')).toBeInTheDocument();
    expect(container.querySelector('#trainers')).toBeInTheDocument();
    expect(container.querySelector('#events')).toBeInTheDocument();
    expect(container.querySelector('#calculator')).toBeInTheDocument();
    expect(container.querySelector('#reviews')).toBeInTheDocument();
    expect(container.querySelector('#location')).toBeInTheDocument();
  });

  test('opens and closes the Free VIP Pass modal successfully', () => {
    render(<App />);
    const passButtons = screen.getAllByText(/Free Pass/i);
    fireEvent.click(passButtons[0]);

    // Modal should now be visible
    expect(screen.getByText(/GENERATE VIP PASS NOW/i)).toBeInTheDocument();

    // Escape key should dismiss modal
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByText(/GENERATE VIP PASS NOW/i)).not.toBeInTheDocument();
  });
});
