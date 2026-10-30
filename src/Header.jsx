
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h2>React World</h2>

            <div className="menu">
                <span>Home</span>
                <span>About</span>
                <span>Features</span>
            </div>
        </header>
    );
};

export default Header;
