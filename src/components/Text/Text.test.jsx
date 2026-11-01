import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
    it('renders its children', () => {
        render(<Text>Hello world</Text>);

        expect(screen.getByText('Hello world')).toBeInTheDocument();
    });

    it('renders as a paragraph by default', () => {
        render(<Text>Paragraph text</Text>);

        expect(screen.getByText('Paragraph text').tagName).toBe('P');
    });

    it('supports a custom HTML element', () => {
        render(<Text as="span">Span text</Text>);

        expect(screen.getByText('Span text').tagName).toBe('SPAN');
    });

    it('supports a custom size', () => {
        render(<Text size="small">Small text</Text>);

        expect(screen.getByText('Small text').className).toContain('small');
    });

    it('supports a custom weight', () => {
        render(<Text weight="bold">Bold text</Text>);

        expect(screen.getByText('Bold text').className).toContain('bold');
    });

    it('uses default size and weight', () => {
        render(<Text>Default text</Text>);

        const element = screen.getByText('Default text');

        expect(element.className).toContain('body');
        expect(element.className).toContain('regular');
    });
});