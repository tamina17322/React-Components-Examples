import Tabs from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],

  argTypes: {
    items: {
      control: 'object',
      description: 'Array of tabs with id, label, and content.',
    },
  },

  args: {
    items: [
      {
        id: 'overview',
        label: 'Overview',
        content: 'Welcome to the overview tab.',
      },
      {
        id: 'features',
        label: 'Features',
        content: 'Explore the available features.',
      },
      {
        id: 'settings',
        label: 'Settings',
        content: 'Manage your preferences here.',
      },
    ],
  },
};

export default meta;

export const Default = {};

export const TwoTabs = {
  args: {
    items: [
      {
        id: 'profile',
        label: 'Profile',
        content: 'Your profile information appears here.',
      },
      {
        id: 'account',
        label: 'Account',
        content: 'Manage your account settings here.',
      },
    ],
  },
};

export const ManyTabs = {
  args: {
    items: [
      { id: 'one', label: 'Overview', content: 'Overview content.' },
      { id: 'two', label: 'Projects', content: 'Projects content.' },
      { id: 'three', label: 'Activity', content: 'Activity content.' },
      { id: 'four', label: 'Messages', content: 'Messages content.' },
      { id: 'five', label: 'Settings', content: 'Settings content.' },
    ],
  },
};

export const LongContent = {
  args: {
    items: [
      {
        id: 'details',
        label: 'Details',
        content: 'This is a longer content example demonstrating how the tab panel handles multiple sentences and detailed information. The panel should expand naturally to accommodate its content.',
      },
      {
        id: 'summary',
        label: 'Summary',
        content: 'A short summary of the information.',
      },
    ],
  },
};