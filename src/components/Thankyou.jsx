import React from 'react';

import thankyou from '../assets/images/illustration-thank-you.svg';

const Thankyou = ({selected}) => {
  return (
    <div className="thankyou__container">
      <img src={thankyou} alt="thankyou-rate" />
      
      <div className="selected">
        <p>You selected {selected} out of 5</p>
      </div>

      <div>
        <h1 className="header-title center">Thankyou you!</h1>
        <p className="description center">We appreciate you taking the time to give a rating. 
          If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default Thankyou;