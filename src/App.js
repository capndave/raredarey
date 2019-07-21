import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rare Darey</h1>
        <h4>
          Dairy-free cheese, coming soon!
        </h4>
        <p>
          Write us at&nbsp;  
          <a
            className="App-link"
            href="mailto:info@raredarey.com?Subject=Tell%20me%20about%20rare%20darey!"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@raredarey.com
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
