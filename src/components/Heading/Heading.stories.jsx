import Heading from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
    },
    level: {
      control: 'select',
      options: [1, 2, 3],
    },
  },

  args: {
    children: 'This is a heading',
    level: 2,
  },
};

export default meta;

export const Default = {};

export const H1 = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const H2 = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const H3 = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const LongText = {
  args: {
    level: 1,
    children: 'This is a longer heading demonstrating how the component handles longer titles.',
  },
};