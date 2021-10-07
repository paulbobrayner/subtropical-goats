import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

function ModalContainer({ modalOpen, setModalOpen }) {
  const [review, setReview] = useState();
  const [reviewRating, setReviewRating] = useState(0);

  function handleReview(review) {
    const { target } = review;
    setReview(target.value);
  }

  function submitReview() {
    // POST REQ
  }

  return (
    <ModalComponent
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleReview={handleReview}
      reviewRating={reviewRating}
      setReviewRating={setReviewRating}
    />
  );
}
export default ModalContainer;
