import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal">
        Modal content
      </Modal>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        Modal content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('focuses the first focusable element when opened', async () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <button>First button</button>
        <button>Second button</button>
      </Modal>
    );

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Close dialog' }))
        .toHaveFocus();
    });
  });

  it('moves focus to the first element when Tab is pressed on the last element', async () => {
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <button>Last button</button>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: 'Close dialog' });
    const lastButton = screen.getByRole('button', { name: 'Last button' });

    lastButton.focus();
    await user.tab();

    expect(closeButton).toHaveFocus();
  });

  it('moves focus to the last element when Shift+Tab is pressed on the first element', async () => {
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <button>Last button</button>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: 'Close dialog' });
    const lastButton = screen.getByRole('button', { name: 'Last button' });

    closeButton.focus();
    await user.tab({ shift: true });

    expect(lastButton).toHaveFocus();
  });

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    );

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    );

    await user.click(screen.getByRole('button', { name: 'Close dialog' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes when the overlay is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    const { container } = render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    );

    await user.click(container.firstChild);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});