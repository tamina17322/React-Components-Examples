import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('renders its children', () => {
    render(
      <Form>
        <button type="submit">Submit</button>
      </Form>
    );

    expect(
      screen.getByRole('button', { name: 'Submit' })
    ).toBeInTheDocument();
  });

  it('calls onSubmit when submitted', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('prevents the default browser submission', async () => {
    const handleSubmit = vi.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    const form = screen.getByRole('button', { name: 'Submit' }).closest('form');
    const event = new Event('submit', {
      bubbles: true,
      cancelable: true,
    });

    form.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('works without an onSubmit callback', async () => {
    const user = userEvent.setup();

    render(
      <Form>
        <button type="submit">Submit</button>
      </Form>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});