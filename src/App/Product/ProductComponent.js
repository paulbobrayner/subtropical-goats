import React from 'react';
import styled from 'styled-components';
import StarsComponent from '../Stars/StarsComponent';
import Review from './Review';

function ProductComponent({ setModalOpen, product, reviews, averageRating }) {
  if (!product) {
    return <div>loading...</div>;
  }

  function renderReviews() {
    if (reviews && reviews.length > 0) {
      return reviews.map((review) => {
        return <Review review={review} />;
      });
    }
  }

  return (
    <Wrap>
      <Title>{product?.name}</Title>
      <Header>
        <AverageWrap>
          <AverageScore>{averageRating}</AverageScore>
          <AverageStars>
            <StarsComponent rating={averageRating} />
          </AverageStars>
        </AverageWrap>
        <ButtonWrap>
          <Button onClick={() => setModalOpen(true)}>Add review</Button>
        </ButtonWrap>
      </Header>
      <Line />
      <Subtitle>Reviews</Subtitle>
      {renderReviews()}
    </Wrap>
  );
}

export default ProductComponent;

const Wrap = styled.div`
  justify-content: center;
  margin: 120px auto;
  max-width: 450px;

  @media (max-width: 575px) {
    padding: 15px;
  }
`;

const Title = styled.div`
  font-size: 3.25em;
  font-weight: 700;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const AverageWrap = styled.div`
  display: flex;
`;

const AverageScore = styled.div`
  font-size: 2.25em;
`;

const AverageStars = styled.div`
  margin: 13px 15px;
`;

const ButtonWrap = styled.div`
  line-height: 2.25em;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 34px;
  background: white;
  color: grey;
  border-radius: 4px;
  border: 1px solid grey;
  width: 98px;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
`;

const Line = styled.div`
  border-top: 1px solid lightgrey;
  margin-top: 30px;
`;

const Subtitle = styled.div`
  margin: 20px 0;
  font-size: 2em;
  font-weight: 700;
`;
