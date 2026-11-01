
import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['display', 'bodyLarge', 'body', 'small'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'semibold', 'bold'],
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div'],
    },
  },

  args: {
    children: 'This is an example of text.',
    size: 'body',
    weight: 'regular',
    as: 'p',
  },
};

export default meta;

export const Default = {};

export const Display = {
  args: { size: 'display' },
};

export const BodyLarge = {
  args: { size: 'bodyLarge' },
};

export const Body = {
  args: { size: 'body' },
};

export const Small = {
  args: { size: 'small' },
};

export const Semibold = {
  args: { weight: 'semibold' },
};

export const Bold = {
  args: { weight: 'bold' },
};

export const LongContent = {
  args: {
    children: 'This is a longer paragraph demonstrating how the Text component handles multiple words and longer content across several lines.',
  },
};
