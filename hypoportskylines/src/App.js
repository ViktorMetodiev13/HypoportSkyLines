import './App.css';

import { Header } from './components/Header/Header';
import { Bookings } from './components/Bookings/Bookings';

function App() {
    return (
        <div className="App">
            {/* <img src='.././public/images/bg6.jpg'/> */}
            <Header />
            <Bookings />
        </div>
    );
}

export default App;
