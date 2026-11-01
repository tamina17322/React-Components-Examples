import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders with its label', () => {
    render(<Checkbox id="terms" label="Accept terms" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('supports the default checked state', () => {
    render(
      <Checkbox id="terms" label="Accept terms" defaultChecked />
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('supports the controlled checked state', () => {
    render(
      <Checkbox
        id="terms"
        label="Accept terms"
        checked={true}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    let changed = false;

    render(
      <Checkbox
        id="terms"
        label="Accept terms"
        onChange={() => {
          changed = true;
        }}
      />
    );

    await user.click(screen.getByRole('checkbox'));

    expect(changed).toBe(true);
  });

  it('can be disabled', () => {
    render(
      <Checkbox id="terms" label="Accept terms" disabled />
    );

    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});