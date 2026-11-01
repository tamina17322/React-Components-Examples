import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from './Switch';

describe('Switch', () => {
  it('renders with its label', () => {
    render(<Switch id="notifications" label="Notifications" />);

    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });

  it('supports the default checked state', () => {
    render(
      <Switch
        id="notifications"
        label="Notifications"
        defaultChecked
      />
    );

    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('supports the controlled checked state', () => {
    render(
      <Switch
        id="notifications"
        label="Notifications"
        checked={true}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('calls onChange when toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Switch
        id="notifications"
        label="Notifications"
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('switch'));

    expect(onChange).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    render(
      <Switch
        id="notifications"
        label="Notifications"
        disabled
      />
    );

    expect(screen.getByRole('switch')).toBeDisabled();
  });
});