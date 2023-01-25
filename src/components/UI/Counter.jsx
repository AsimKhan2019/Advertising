import React from 'react';
import '../../styles/counter.css';

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="counter__wrapper">
          <div className="counter__item">
            <h3 className="counter__number">
              5K+
            </h3>
            <h4 className="counter__title">
              Clients
            </h4>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter