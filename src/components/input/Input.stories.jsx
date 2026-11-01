import { useState } from 'react';
import Input from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: { control: 'boolean' },
  },

  args: {
    id: 'storybook-input',
    label: 'Email address',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email.',
    error: '',
    type: 'text',
    disabled: false,
    value: '',
  },
};

export default meta;

export const Default = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const WithValue = {
  args: {
    value: 'tamina@example.com',
    helperText: 'Your email address is saved.',
  },
};

export const WithError = {
  args: {
    error: 'Please enter a valid email address.',
    helperText: '',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    value: 'tamina@example.com',
  },
};

export const Password = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const LongContent = {
  args: {
    label: 'Detailed information',
    placeholder: 'Enter your information here...',
    helperText: 'Please provide all the necessary details before continuing.',
  },
};
