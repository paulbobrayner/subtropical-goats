import React from 'react';
import styled from 'styled-components';

function ProductComponent({ setModalOpen }) {
  return (
    <Wrap>
      <Title>Sub goats</Title>
      <Header>
        <AverageWrap>
          <AverageScore>3.4</AverageScore>
          <AverageStars></AverageStars>
        </AverageWrap>
        <ButtonWrap>
          <Button onClick={() => setModalOpen(true)}>Add review</Button>
        </ButtonWrap>
      </Header>
      <Line />
      <Subtitle>Reviews</Subtitle>
    </Wrap>
  );
}

export default ProductComponent;

const Wrap = styled.div`
  justify-content: center;
  margin: 120px auto;
  max-width: 450px;
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
