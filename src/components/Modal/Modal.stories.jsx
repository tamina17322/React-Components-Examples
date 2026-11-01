import { useState } from 'react';
import Modal from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],

  argTypes: {
    title: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
    onClose: {
      action: 'modal closed',
    },
    children: {
      control: false,
    },
  },

  args: {
    title: 'Modal Title',
    isOpen: true,
  },
};

export default meta;

export const Default = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>This is an example modal.</p>
          <p>You can close it using the close button, Escape key, or clicking outside.</p>
        </Modal>
      </>
    );
  },
};

export const WithLongContent = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal
          {...args}
          title="Detailed Information"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>
            This modal demonstrates how the component handles longer content.
            It can contain multiple paragraphs and additional information.
          </p>
          <p>
            The modal has a maximum height and supports scrolling when its
            content exceeds the available space.
          </p>
          <p>
            You can also interact with buttons and other focusable elements
            inside the modal.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithActions = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Open Confirmation
        </button>

        <Modal
          {...args}
          title="Confirm Action"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>Are you sure you want to continue?</p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>

            <button onClick={() => setIsOpen(false)}>
              Confirm
            </button>
          </div>
        </Modal>
      </>
    );
  },
};

export const LongTitle = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal
          {...args}
          title="Important Information About Your Account Settings"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>This example demonstrates a longer modal title.</p>
        </Modal>
      </>
    );
  },
};