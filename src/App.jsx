import Input from "./components/input/input";
import { useState } from "react";
import DesignSystem from "./DesignSystem/DesignSystem.tsx";
import Button from "./components/Button/button";
import Card from "./components/Card/Card";
import "./App.css";
import Text from './components/Text/Text';
import Heading from './components/Heading/Heading';
import Form from "./components/Form/Form";
import Badge from "./components/Badge/Badge";
import Alert from "./components/Alert/Alert";
import Checkbox from "./components/Checkbox/Checkbox";
import Radio from "./components/Radio/Radio";
import Switch from "./components/Switch/Switch";
import Modal from './components/Modal/Modal';
import Tabs from './components/Tabs/Tabs';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();

  const darkMode = theme === 'dark';
  const setDarkMode = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <>
      <DesignSystem
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        className={`component-tests ${darkMode ? "dark" : "light"}`}
      >
        <Heading level={2}>Button Component Test</Heading>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <Heading level={3}>Sizes</Heading>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <Heading level={3}>Disabled</Heading>
        <Button disabled>Disabled</Button>



        <Heading level={2}>Input Component Test</Heading>

        <Input
          id="default-input"
          label="Full name"
          placeholder="Enter your name"
          helperText="Enter your first and last name."
        />

        <Input
          id="focus-input"
          label="Focused input"
          placeholder="Click or tab here"
        />

        <Input
          id="error-input"
          label="Email address"
          placeholder="Enter your email"
          error="Please enter a valid email address."
        />

        <Input
          id="disabled-input"
          label="Disabled input"
          placeholder="This field is disabled"
          disabled
        /> <br />
        <Card>
          <Card.Header>
            <Heading level={3}>My Card</Heading>
          </Card.Header>

          <Card.Body>
            <Text size="body">This is a reusable card using design tokens.</Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>

          <Card.Footer>
            <Text size="body">Last Updated Today</Text>
          </Card.Footer>
        </Card><br />


        <Heading level={1}>Design System Components</Heading>
        <Heading level={2}>Typography Test</Heading>
        <Heading level={3}>Small Heading</Heading>

        <Text size="bodyLarge">This is body-large text.</Text>
        <Text size="body">This is regular body text.</Text>
        <Text size="small">This is small helper text.</Text>

        <Heading level={2}>Form Component Test</Heading>

        <Form
          onSubmit={(event) => {
            console.log("Form submitted");
            console.log(event);
          }}
        >
          <Heading level={3}>Contact Us</Heading>

          <Input
            id="contact-name"
            label="Name"
            placeholder="Enter your name"
            helperText="Your first and last name."
          />

          <Input
            id="contact-email"
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Heading level={2}>Badge Component Test</Heading>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>

        <Heading level={2}>Alert Component Test</Heading>

        <Alert
          variant="neutral"
          title="Notice"
          message="This is a neutral information message."
        />

        <Alert
          variant="success"
          title="Success"
          message="Your changes have been saved successfully."
        />

        <Alert
          variant="warning"
          title="Warning"
          message="Please review your information before continuing."
        />

        <Alert
          variant="error"
          title="Error"
          message="Something went wrong. Please try again."
        />

        <Alert
          variant="info"
          title="Information"
          message="Your account information is up to date."
        />
        <Heading level={2}>Checkbox Component Test</Heading>

        <Checkbox
          id="terms"
          label="Accept terms and conditions"
        />

        <Checkbox
          id="newsletter"
          label="Subscribe to newsletter"
          defaultChecked
        />

        <Checkbox
          id="disabled-checkbox"
          label="Disabled checkbox"
          disabled
        />
        <Heading level={2}>Radio Component Test</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio
            id="option-one"
            name="options"
            value="one"
            label="Option One"
            defaultChecked
          />

          <Radio
            id="option-two"
            name="options"
            value="two"
            label="Option Two"
          />

          <Radio
            id="option-three"
            name="options"
            value="three"
            label="Option Three"
          />
        </div>
        <Heading level={2}>Switch Component Test</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Switch
            id="notifications"
            label="Enable notifications"
            defaultChecked
          />

          <Switch
            id="dark-mode"
            label="Enable dark mode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />

          <Switch
            id="disabled-switch"
            label="Disabled switch"
            disabled
          />
        </div>

        <Heading level={2}>Modal Component Test</Heading>

        <Button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Welcome to the Modal"
        >
          <Text>
            This is a custom accessible modal component.
            You can close it using the close button, Escape,
            or by clicking outside the panel.
          </Text>

          <Button onClick={() => setIsModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
        <Heading level={2}>Tabs Component Test</Heading>

        <Tabs
          items={[
            {
              id: 'overview',
              label: 'Overview',
              content: <Text>Welcome to the overview tab.</Text>,
            },
            {
              id: 'features',
              label: 'Features',
              content: <Text>Explore the features of our design system.</Text>,
            },
            {
              id: 'settings',
              label: 'Settings',
              content: <Text>Manage your preferences here.</Text>,
            },
          ]}
        />


      </div>
    </>
  );
}


export default App;
