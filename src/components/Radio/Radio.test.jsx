import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from './Radio';

describe('Radio', () => {
  it('renders with its label', () => {
    render(
      <Radio
        id="option1"
        name="choice"
        value="one"
        label="Option One"
      />
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Option One')).toBeInTheDocument();
  });

  it('supports the default checked state', () => {
    render(
      <Radio
        id="option1"
        name="choice"
        value="one"
        label="Option One"
        defaultChecked
      />
    );

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('supports the controlled checked state', () => {
    render(
      <Radio
        id="option1"
        name="choice"
        value="one"
        label="Option One"
        checked={true}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('calls onChange when selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Radio
        id="option1"
        name="choice"
        value="one"
        label="Option One"
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole('radio'));

    expect(onChange).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    render(
      <Radio
        id="option1"
        name="choice"
        value="one"
        label="Option One"
        disabled
      />
    );

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('allows only one option in the same group to be selected', async () => {
    const user = userEvent.setup();

    render(
      <>
        <Radio id="option1" name="choice" value="one" label="Option One" />
        <Radio id="option2" name="choice" value="two" label="Option Two" />
      </>
    );

    const firstOption = screen.getByRole('radio', { name: 'Option One' });
    const secondOption = screen.getByRole('radio', { name: 'Option Two' });

    await user.click(firstOption);
    expect(firstOption).toBeChecked();

    await user.click(secondOption);

    expect(secondOption).toBeChecked();
    expect(firstOption).not.toBeChecked();
  });
});