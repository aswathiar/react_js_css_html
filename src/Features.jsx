
import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <h2>React Features</h2>

            <div className="feature-box">
                <h3>Components</h3>
                <p>Reusable pieces of UI.</p>
            </div>

            <div className="feature-box">
                <h3>JSX</h3>
                <p>HTML-like syntax inside JavaScript.</p>
            </div>

            <div className="feature-box">
                <h3>Virtual DOM</h3>
                <p>Helps update the UI efficiently.</p>
            </div>

            <div className="feature-box">
                <h3>One Way Data Binding</h3>
                <p>Data flows from parent to child.</p>
            </div>
        </section>
    );
};

export default Features;
