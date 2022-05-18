import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";

function App() {


  return (
      <div className="App">
          <div className="appDiv">
        <header className="App-header">
            <InputForm/>
          <a
              className="App-link"
              href="https://github.com/oliwiakubera/test-app-v2.git"
              target="_blank"
              rel="noopener noreferrer"
          >
            Repozytorium
          </a>
        </header>

      </div>
</div>
  );
}
export default App;
