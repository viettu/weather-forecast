import React from 'react';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import Weather from '../Weather/Weather';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Nguyen Viet Tu ( viettu.eric@gmail.com )
      </header>
      <ErrorHandler>
        <Weather />
      </ErrorHandler>
    </div>
  );
}

export default App;