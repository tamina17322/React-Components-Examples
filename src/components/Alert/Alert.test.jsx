import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it.each(['neutral', 'success', 'warning', 'error', 'info'])(
    'renders the %s variant',
    (variant) => {
      render(
        <Alert
          variant={variant}
          title="Notification"
          message="This is an alert message."
        />
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Notification')).toBeInTheDocument();
      expect(
        screen.getByText('This is an alert message.')
      ).toBeInTheDocument();
    }
  );

  it('uses neutral as the default variant', () => {
    render(<Alert message="Default alert" />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('falls back to neutral for an invalid variant', () => {
    render(<Alert variant="unknown" message="Fallback alert" />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders without a title when no title is provided', () => {
    render(<Alert message="Only a message" />);

    expect(screen.getByText('Only a message')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});