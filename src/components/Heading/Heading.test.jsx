import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders its children', () => {
    render(<Heading>Welcome</Heading>);

    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('renders h2 by default', () => {
    render(<Heading>Default heading</Heading>);

    expect(
      screen.getByRole('heading', { level: 2 })
    ).toBeInTheDocument();
  });

  it('renders the requested heading level', () => {
    render(<Heading level={1}>Main heading</Heading>);

    expect(
      screen.getByRole('heading', { level: 1 })
    ).toBeInTheDocument();
  });

  it('supports other heading levels', () => {
    render(<Heading level={3}>Section heading</Heading>);

    expect(
      screen.getByRole('heading', { level: 3 })
    ).toBeInTheDocument();
  });
});