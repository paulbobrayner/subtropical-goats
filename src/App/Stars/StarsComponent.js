import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function StarsComponent({ setReviewRating, reviewRating, rating }) {
  const starFillingOptions = ['empty', 'half', 'full'];
  const [starFilling, setStarFilling] = useState({
    1: 'empty',
    2: 'empty',
    3: 'empty',
    4: 'empty',
    5: 'empty',
  });

  // round non half ratings
  if (rating && +rating[2] !== 5) rating = Math.round(rating);

  // if we have a rating then set the filling type for each star
  useEffect(
    function initRating() {
      if (rating) {
        const updatedColours = {};
        for (const [key, value] of Object.entries(starFilling)) {
          const isHalf = rating && +key === +rating[0] + 1 && rating[2] === '5';
          if (isHalf) {
            updatedColours[key] = 'half';
          } else if (key <= rating) {
            updatedColours[key] = 'full';
          } else {
            updatedColours[key] = 'empty';
          }
        }

        setStarFilling(updatedColours);
      }
    },
    [rating]
  );

  // add review rating and toggle filling type
  function toggleColour(starKey, starValue) {
    if (rating) return;

    const index = starFillingOptions.indexOf(starValue);
    const lastElement = starFillingOptions.length === index + 1;

    if (lastElement) {
      setStarFilling({
        ...starFilling,
        [starKey]: starFillingOptions[0],
      });
      setReviewRating(reviewRating - 1);

      return;
    }

    setStarFilling({
      ...starFilling,
      [starKey]: starFillingOptions[index + 1],
    });
    setReviewRating(reviewRating + 0.5);
  }

  function getColour(filling) {
    if (filling === 'empty') return 'lightgrey';
    return '#FEE12B';
  }

  function renderStars() {
    return Object.entries(starFilling).map((star) => {
      const isHalfRating =
        rating && +star[0] === +rating[0] + 1 && rating[2] === '5';

      if (isHalfRating || star[1] === 'half') {
        return (
          <HalfStar
            icon={faStarHalfAlt}
            colour={getColour(star[1])}
            onClick={() => toggleColour(+star[0], star[1])}
          />
        );
      }

      return (
        <Star
          icon={faStar}
          colour={starFilling && getColour(star[1])}
          onClick={() => toggleColour(+star[0], star[1])}
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

const HalfStar = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${({ colour }) => (colour ? colour : 'lightgrey')};
`;
