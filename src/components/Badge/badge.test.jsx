import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>New</Badge>);

    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('uses neutral as the default variant', () => {
    const { container } = render(<Badge>Default</Badge>);

    expect(container.firstChild.className).toContain('neutral');
  });

  it.each(['success', 'warning', 'error', 'info'])(
    'renders the %s variant',
    (variant) => {
      const { container } = render(
        <Badge variant={variant}>Status</Badge>
      );

      expect(container.firstChild.className).toContain(variant);
    }
  );

  it('falls back to neutral for an invalid variant', () => {
    const { container } = render(
      <Badge variant="unknown">Fallback</Badge>
    );

    expect(container.firstChild.className).toContain('neutral');
  });
});