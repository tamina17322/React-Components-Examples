import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],

  argTypes: {
    header: {
      control: 'text',
      description: 'Card header content',
    },
    body: {
      control: 'text',
      description: 'Card body content',
    },
    footer: {
      control: 'text',
      description: 'Card footer content',
    },
  },

  args: {
    header: 'Card Title',
    body: 'This is the card content.',
    footer: 'Card footer',
  },
};

export default meta;

export const Default = {
  render: (args) => (
    <Card>
      <Card.Body>{args.body}</Card.Body>
    </Card>
  ),
};

export const WithHeader = {
  render: (args) => (
    <Card>
      <Card.Header>{args.header}</Card.Header>
      <Card.Body>{args.body}</Card.Body>
    </Card>
  ),
};

export const WithFooter = {
  render: (args) => (
    <Card>
      <Card.Body>{args.body}</Card.Body>
      <Card.Footer>{args.footer}</Card.Footer>
    </Card>
  ),
};

export const HeaderAndFooter = {
  render: (args) => (
    <Card>
      <Card.Header>{args.header}</Card.Header>
      <Card.Body>{args.body}</Card.Body>
      <Card.Footer>{args.footer}</Card.Footer>
    </Card>
  ),
};

export const LongContent = {
  args: {
    header: 'Detailed Information',
    body: 'This card demonstrates how the component handles longer content. It can contain multiple sentences describing a feature, displaying information, or presenting details to the user.',
    footer: 'Last updated: October 2026',
  },
  render: (args) => (
    <Card>
      <Card.Header>{args.header}</Card.Header>
      <Card.Body>{args.body}</Card.Body>
      <Card.Footer>{args.footer}</Card.Footer>
    </Card>
  ),
};
