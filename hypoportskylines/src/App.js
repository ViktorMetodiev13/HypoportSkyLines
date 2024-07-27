import './App.css';

import { Header } from './components/Header/Header';
import { Bookings } from './components/Bookings/Bookings';

function App() {
    return (
        <div className="App">
            <Header />
            <Bookings />
        </div>
    );
}

export default App;
