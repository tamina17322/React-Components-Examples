import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it.each(['primary', 'secondary', 'ghost', 'danger'])(
    'renders the %s variant',
    (variant) => {
      render(<Button variant={variant}>Click me</Button>);

      const button = screen.getByRole('button', { name: 'Click me' });

      expect(button).toBeInTheDocument();
      expect(button.className).toContain(variant);
    }
  );

  it('renders with the default props', () => {
    render(<Button>Submit</Button>);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
