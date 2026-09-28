import Button from './components/Button/button.jsx';
import Input from './components/input/input.jsx';
import { useState } from 'react';

export default function App() {
  function sayHello() {
    alert('Hello! You made your first button.');
  }
  const [name, setName] = useState('');


  return (

    <main>

      <div>
        <h1>My first button</h1>
        <Button onClick={sayHello}>Welcome</Button>
      </div>
      <br />


      <div>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <p>Hello, {name}</p>
      </div>

      <br />


      <div>
        <card
          title="React Course"
          description=" Learn react components.">

          <button>Learn More</button>
        </card>
      </div>

      <br />


      <div>
        <card
          title="Design"
          description="Additional info.">

          <input placeholder='Type something'></input>
        </card>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >

          <label>
            <input
              type="radio"
              name="language"
              value="JavaScript"
            />
            JavaScript
          </label>
        </form>
      </div>


    </main>
  )
}