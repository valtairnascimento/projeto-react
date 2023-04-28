import P from 'prop-types';
import React, { useState } from 'react';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(2)}>+</button>;
});
Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num);
  };

  return (
    <div className="App">
      <h1>Contar: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
