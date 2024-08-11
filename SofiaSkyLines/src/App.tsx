import './App.css';

import React from 'react';

import { Header } from './components/Header/Header';
import { Bookings } from './components/Bookings/Bookings';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Bookings />
        </div>
    );
};

export default App;
