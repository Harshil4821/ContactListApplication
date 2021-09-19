import React, {useState} from 'react';
import './app.css';
import Sidebar from './components/sidebar/index';
import Home from './components/home/index';

const App = ()=>{
    return (
        <>
            <div className="main" id="main">
                <Sidebar />
                <Home/>
            </div>
        </>
    )
};

export default App;