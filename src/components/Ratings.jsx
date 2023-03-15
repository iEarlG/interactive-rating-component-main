import React, { useState } from 'react';

import star from '../assets/images/icon-star.svg';

const Ratings = () => {
  const [selected, setSelected] = useState(0);

  const handleRatingClicked = (rating) => {
    setSelected(rating);
  }
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
        {[1, 2, 3, 4, 5].map((rating, i) => (
          <button key={i} onClick={() => handleRatingClicked(rating)}>
            {rating}
          </button>
        ))}
      </div>
        <button disabled={!selected === 0} className="submit-btn">Submit</button>
    </div>
  )
}

export default Ratings;