import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import { postReview } from '../../api';

function ModalContainer({
  modalOpen,
  setModalOpen,
  productId,
  setPostReviewSuccess,
}) {
  const [review, setReview] = useState();
  const [reviewRating, setReviewRating] = useState(0);

  function handleReview(review) {
    const { target } = review;
    setReview(target.value);
  }

  function submitReview() {
    const reviewSubmission = {
      product_id: productId,
      rating: reviewRating,
      review,
    };

    console.log('submission', reviewSubmission);

    postReview(reviewSubmission).then((response) => {
      console.log('submitted', response);
      if (response.status === 201) {
        setModalOpen(false);
        setPostReviewSuccess(true);
      }
    });
  }

  return (
    <ModalComponent
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleReview={handleReview}
      reviewRating={reviewRating}
      setReviewRating={setReviewRating}
      submitReview={submitReview}
    />
  );
}
export default ModalContainer;
