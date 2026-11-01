import Button from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'Button label',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },

  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};

export const Small = {
  args: {
    size: 'sm',
  },
};

export const Medium = {
  args: {
    size: 'md',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const LongText = {
  args: {
    children: 'This is a button with a longer label',
  },
};
export const DoAndDont = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div>
        <p>Do: Use the primary button for the main action.</p>
        <Button variant="primary">Save Changes</Button>
      </div>

      <div>
        <p>Don't: Use the danger button for an ordinary action.</p>
        <Button variant="danger">Save Changes</Button>
      </div>
    </div>
  ),
};