import Switch from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
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
    id: 'storybook-switch',
    label: 'Enable notifications',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

export const Default = {};

export const On = {
  args: {
    defaultChecked: true,
    label: 'Notifications enabled',
  },
};

export const Off = {
  args: {
    defaultChecked: false,
    label: 'Notifications disabled',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Disabled switch',
  },
};

export const DisabledOn = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled but enabled',
  },
};

export const LongLabel = {
  args: {
    label: 'Enable notifications whenever there are important updates.',
  },
};