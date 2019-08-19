import React from 'react';
import SideNav from '../SideNav';
import Chart from '../Chart';

import './App.css';

const App = () => (
    <div className="App">
        <SideNav />
        <div className="App__body">
            <Chart />
        </div>
    </div>
);

export default App;
