import Form from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],

  argTypes: {
    onSubmit: {
      action: 'form submitted',
    },
  },
};

export default meta;

export const Default = {
  render: (args) => (
    <Form {...args}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Enter your name" />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your email" />

      <button type="submit">Submit</button>
    </Form>
  ),
};

export const WithLongContent = {
  render: (args) => (
    <Form {...args}>
      <h3>Registration Form</h3>
      <p>Please complete all the fields below to register.</p>

      <label htmlFor="full-name">Full Name</label>
      <input id="full-name" type="text" placeholder="Enter your full name" />

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" type="tel" placeholder="Enter your phone number" />

      <label htmlFor="registration-email">Email</label>
      <input id="registration-email" type="email" placeholder="Enter your email" />

      <button type="submit">Create Account</button>
    </Form>
  ),
};