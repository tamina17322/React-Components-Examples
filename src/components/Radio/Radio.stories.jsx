import Radio from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],

  argTypes: {
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
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
    id: 'storybook-radio',
    name: 'storybook-radio-group',
    value: 'option-1',
    label: 'Option 1',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

export const Default = {};

export const Selected = {
  args: {
    defaultChecked: true,
    label: 'Selected option',
  },
};

export const Unselected = {
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

export const DisabledSelected = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled selected option',
  },
};

export const LongLabel = {
  args: {
    label: 'Choose this option if you agree with all the terms and conditions.',
  },
};

export const RadioGroup = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio
        id="radio-option-1"
        name="example-group"
        value="option-1"
        label="Option 1"
        defaultChecked
      />
      <Radio
        id="radio-option-2"
        name="example-group"
        value="option-2"
        label="Option 2"
      />
      <Radio
        id="radio-option-3"
        name="example-group"
        value="option-3"
        label="Option 3"
      />
    </div>
  ),
};