import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarsComponent({ setReviewRating, reviewRating, rating }) {
  const defaultColour = 'lightgrey';
  const [starColours, setStarColours] = useState({
    1: defaultColour,
    2: defaultColour,
    3: defaultColour,
    4: defaultColour,
    5: defaultColour,
  });

  const wholeRating = Math.round(rating);

  useEffect(
    function initRating() {
      if (wholeRating) {
        const updatedColours = {};
        for (const [key, value] of Object.entries(starColours)) {
          if (key <= wholeRating) {
            updatedColours[key] = '#FEE12B';
          } else {
            updatedColours[key] = 'lightgrey';
          }
        }

        setStarColours(updatedColours);
      }
    },
    [rating]
  );

  function toggleColour(star) {
    if (rating) return;

    if (starColours[star] === 'lightgrey') {
      setStarColours({ ...starColours, [star]: '#FEE12B' });
      setReviewRating(reviewRating + 1);
      return;
    }
    setStarColours({ ...starColours, [star]: 'lightgrey' });
    setReviewRating(reviewRating - 1);
  }

  function renderStars() {
    return Object.entries(starColours).map((star) => {
      return (
        <Star
          icon={faStar}
          colour={starColours ? star[1] : 'lightgrey'}
          onClick={() => toggleColour(+star[0])}
        />
      );
    });
  }

  return renderStars();
}

export default StarsComponent;

const Star = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${({ colour }) => (colour ? colour : 'lightgrey')};
`;
