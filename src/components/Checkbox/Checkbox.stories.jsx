import Checkbox from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },

  args: {
    id: 'storybook-checkbox',
    label: 'Accept terms and conditions',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

export const Default = {};

export const Checked = {
  args: {
    defaultChecked: true,
    label: 'Selected option',
  },
};

export const Unchecked = {
  args: {
    defaultChecked: false,
    label: 'Unselected option',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Disabled option',
  },
};

export const DisabledChecked = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled selected option',
  },
};

export const LongLabel = {
  args: {
    label: 'I agree to the terms and conditions and acknowledge the privacy policy.',
  },
};