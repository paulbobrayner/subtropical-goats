import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import { postReview } from '../../api';

function ModalContainer({ modalOpen, setModalOpen, productId, socket }) {
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

    postReview(reviewSubmission).then((response) => {
      console.log('submitted', response);
      if (response.status === 201) {
        setModalOpen(false);
        socket.emit('submitReview', productId);
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
