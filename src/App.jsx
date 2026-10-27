import Input from "./components/input/input";
import { useState } from "react";
import DesignSystem from "./DesignSystem/DesignSystem.tsx";
import Button from "./components/Button/button";
import Card from "./components/Card/Card";
import "./App.css";
import Text from './components/Text/Text';
import Heading from './components/Heading/Heading';
import Form from "./components/Form/Form";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <DesignSystem
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        className={`component-tests ${darkMode ? "dark" : "light"}`}
        data-theme={darkMode ? "dark" : "light"}
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

      </div>
    </>
  );
}

export default App;
