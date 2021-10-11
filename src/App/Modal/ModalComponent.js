import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import StarsComponent from '../Stars/StarsComponent';

function ModalComponent({
  modalOpen,
  setModalOpen,
  reviewRating,
  setReviewRating,
  handleReview,
  submitReview,
}) {
  return (
    <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
      <ModalWrap>
        <Title>What's your rating?</Title>
        <Subtitle>Rating</Subtitle>
        <StarsComponent
          reviewRating={reviewRating}
          setReviewRating={setReviewRating}
        />
        <Subtitle>Review</Subtitle>
        <div>
          <ReviewInput
            placeholder="Start typing..."
            onChange={(review) => handleReview(review)}
          />
        </div>
        <SubmitButton onClick={submitReview}>Submit review</SubmitButton>
      </ModalWrap>
    </Modal>
  );
}

export default ModalComponent;

const ModalWrap = styled.div`
  padding: 26px;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  margin: 20px 0;
`;

const ReviewInput = styled.input`
  border: none;
`;

const SubmitButton = styled.button`
  height: 34px;
  background: white;
  color: grey;
  border-radius: 4px;
  border: 1px solid grey;
  width: 135px;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  margin-top: 40px;
`;
