import React from 'react'
import {ErrorHandler} from './components/ErrorHandler/ErrorHandler'
import SearchWeathers from './containers/SearchWeathers/SearchWeathers'

import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">Nguyen Viet Tu (viettu.eric@gmail.com )</header>
            <ErrorHandler>
                <SearchWeathers />
            </ErrorHandler>
        </div>
    )
}

export default App
