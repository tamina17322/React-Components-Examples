import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders its children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );

    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders the Header section', () => {
    render(
      <Card>
        <Card.Header>Card Title</Card.Header>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders the Body section', () => {
    render(
      <Card>
        <Card.Body>Card description</Card.Body>
      </Card>
    );

    expect(screen.getByText('Card description')).toBeInTheDocument();
  });

  it('renders the Footer section', () => {
    render(
      <Card>
        <Card.Footer>Card actions</Card.Footer>
      </Card>
    );

    expect(screen.getByText('Card actions')).toBeInTheDocument();
  });

  it('renders all sections together', () => {
    render(
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Body>Content</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});