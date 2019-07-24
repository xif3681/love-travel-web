import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
// import Hello from './components/Hello/Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header> */}
      {/* <Hello name="TypeScript" enthusiasmLevel={10} />, */}
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
