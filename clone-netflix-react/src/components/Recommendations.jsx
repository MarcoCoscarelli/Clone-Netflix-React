import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <section className="recommendations py-5">
      <div className="container">
        <h2 className="text-light">Ti potrebbe piacere</h2>
        <div className="row">
          {/* Aggiungi componenti per le raccomandazioni */}
          <div className="col-md-4">
            <div className="card">
              <img src="./assets/images/recommendation1.jpg" className="card-img-top" alt="Recommendation 1" />
              <div className="card-body">
                <h5 className="card-title text-light">Titolo Consigliato</h5>
                <p className="card-text text-light">Descrizione breve del contenuto consigliato.</p>
              </div>
            </div>
          </div>
          {/* Ripeti per altre raccomandazioni */}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;