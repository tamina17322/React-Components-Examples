import Alert from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'error', 'info'],
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
  },

  args: {
    variant: 'neutral',
    title: 'Alert Title',
    message: 'This is an example alert message.',
  },
};

export default meta;

export const Default = {};

export const Neutral = {
  args: {
    variant: 'neutral',
    title: 'Information',
    message: 'This is a neutral alert.',
  },
};

export const Success = {
  args: {
    variant: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your information before continuing.',
  },
};

export const Error = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
};

export const Info = {
  args: {
    variant: 'info',
    title: 'Did you know?',
    message: 'You can customize your settings at any time.',
  },
};

export const WithoutTitle = {
  args: {
    title: undefined,
    message: 'This alert displays a message without a title.',
  },
};

export const LongContent = {
  args: {
    title: 'Important Information',
    message: 'This is a longer alert message demonstrating how the component handles detailed information across multiple lines.',
  },
};