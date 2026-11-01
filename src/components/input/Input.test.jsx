import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './input';

describe('Input', () => {
  it('connects the label to the input', () => {
    render(
      <Input
        id="email"
        label="Email Address"
        placeholder="Enter your email"
      />
    );

    const input = screen.getByLabelText('Email Address');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('placeholder', 'Enter your email');
  });

  it('displays helper text', () => {
    render(
      <Input
        id="username"
        label="Username"
        helperText="Choose a unique username"
      />
    );

    expect(screen.getByText('Choose a unique username')).toBeInTheDocument();
  });

  it('displays an error message', () => {
    render(
      <Input
        id="password"
        label="Password"
        error="Password is required"
      />
    );

    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('can be disabled', () => {
    render(
      <Input id="name" label="Name" disabled />
    );

    expect(screen.getByLabelText('Name')).toBeDisabled();
  });
});