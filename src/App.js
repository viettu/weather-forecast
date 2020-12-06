import React from 'react';
import {ErrorHandler} from './components/ErrorHandler/ErrorHandler';
import SearchWeathers from './containers/SearchWeathers/SearchWeathers';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                Nguyen Viet Tu (<a href="mailto:viettu.eric@gmail.com">viettu.eric@gmail.com</a>)
            </header>
            <ErrorHandler>
                <SearchWeathers />
            </ErrorHandler>
        </div>
    );
};

export default App;
