import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from './Tabs';

const items = [
  { id: 'overview', label: 'Overview', content: 'Overview content' },
  { id: 'settings', label: 'Settings', content: 'Settings content' },
  { id: 'profile', label: 'Profile', content: 'Profile content' },
];

describe('Tabs', () => {
  it('renders all tab labels', () => {
    render(<Tabs items={items} />);

    expect(screen.getByRole('tab', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Profile' })).toBeInTheDocument();
  });

  it('selects the first tab by default', () => {
    render(<Tabs items={items} />);

    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Overview content');
  });

  it('changes the active tab when clicked', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    await user.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Settings content');
  });

  it('moves to the next tab with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole('tab', { name: 'Overview' }).focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('moves to the previous tab with ArrowLeft', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole('tab', { name: 'Settings' }).focus();
    await user.keyboard('{ArrowLeft}');

    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveFocus();
  });

  it('wraps to the first tab with ArrowRight on the last tab', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole('tab', { name: 'Profile' }).focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveFocus();
  });

  it('moves to the first tab with Home', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole('tab', { name: 'Profile' }).focus();
    await user.keyboard('{Home}');

    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveFocus();
  });

  it('moves to the last tab with End', async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole('tab', { name: 'Overview' }).focus();
    await user.keyboard('{End}');

    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveFocus();
  });
});