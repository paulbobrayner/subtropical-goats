import React from 'react';
import styled from 'styled-components';
import StarsComponent from '../Stars/StarsComponent';

function Review({ review }) {
  return (
    <ReviewWrap>
      <StarsComponent rating={review.rating} />
      <ReviewRating>
        <strong>{review.rating}</strong>
        <ReviewText>, {review.review}</ReviewText>
      </ReviewRating>
    </ReviewWrap>
  );
}

export default Review;

const ReviewWrap = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ReviewRating = styled.div`
  margin: 3px 10px;
`;

const ReviewText = styled.span`
  color: grey;
`;
