// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1 className="app-name">FindLy</h1>
        <Link to="/login" className="use-service-button">Use the Service</Link>
      </header>

      <section className="intro">
        <h2>Welcome to FindLy</h2>
        <p>FindLy helps you easily track, report, and locate lost and found items seamlessly.</p>
      </section>

      <section className="features">
        <div className="feature-item">
          <img src="/placeholder1.png" alt="Feature 1" />
          <h3>Locate Lost Items</h3>
          <p>Get alerts and notifications to help you find lost items quickly.</p>
        </div>
        <div className="feature-item">
          <img src="/placeholder2.png" alt="Feature 2" />
          <h3>Report Found Items</h3>
          <p>Help others by reporting items you find in public spaces.</p>
        </div>
        <div className="feature-item">
          <img src="/placeholder3.png" alt="Feature 3" />
          <h3>Get Real-time Updates</h3>
          <p>Our real-time update feature allows you to stay informed on the go.</p>
        </div>
      </section>

      <Link to="/login" className="bottom-use-service-button">Use the Service</Link>
    </div>
  );
}

export default LandingPage;
