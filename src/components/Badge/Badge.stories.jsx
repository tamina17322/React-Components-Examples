import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'error', 'info'],
    },
  },

  args: {
    children: 'Badge',
    variant: 'neutral',
  },
};

export default meta;

export const Default = {};

export const Neutral = {
  args: {
    children: 'Neutral',
    variant: 'neutral',
  },
};

export const Success = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Error = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Info = {
  args: {
    children: 'Information',
    variant: 'info',
  },
};

export const LongText = {
  args: {
    children: 'This is a longer badge label',
    variant: 'info',
  },
};