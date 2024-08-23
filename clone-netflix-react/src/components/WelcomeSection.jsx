import React, { useState } from 'react';
import './WelcomeSection.css'; 

const WelcomeSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="welcome-section text-center text-light">
      <h1 className="display-4">Benvenuto Su Clonfl!x</h1>
      <p className="lead">Inizia ora a esplorare contenuti incredibili!</p>
      <button className="btn btn-primary btn-lg mt-3" onClick={handleClick}>
        Inizia ora
      </button>

      {showPopup && (
        <div className="custom-popup">
          <div className="popup-content">
            <h2>🎉 Complimenti! 🎉</h2>
            <p>Hai cliccato il pulsante magico! Preparati a un'esperienza straordinaria.</p>
            <button className="btn btn-light" onClick={closePopup}>
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
