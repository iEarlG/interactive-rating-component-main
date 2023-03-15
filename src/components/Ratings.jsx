import React from 'react';

import star from '../assets/images/icon-star.svg';

const Ratings = () => {
  return (
    <div className="rating__container">
      <img src={star} alt="icon-star" className="rating__star" />

      <div>
        <h1 className="header-title">How did we do?</h1>
        <p className="description">Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
      </div>
      
      <div className="rating">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
        <button className="submit-btn">Submit</button>
    </div>
  )
}

export default Ratings;