import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          {' '}
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>

      <LayOut>
        <LeftSide />
        <Main />
        <RightSide />
      </LayOut>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: border-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const LayOut = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 3.5fr 1.25fr;
  gap: 25px;
  margin: 25px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
