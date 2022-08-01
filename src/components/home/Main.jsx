import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
    </Container>
  );
};

export default Main;

const Container = styled.div``;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;

  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;
`;
