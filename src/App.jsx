
import React from 'react';

import Header from './Header';
import Home from './Home';
import About from './About';
import Features from './Features';
import Footer from './Footer';
import './Global.css';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Features />
            <Footer />
        </div>
    );
};

export default App;
