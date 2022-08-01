import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Section>
      <Hero>
        <h1>Welcome to your Professional community.</h1>
        <img src="/images/login-hero.svg" alt="hero login" />
      </Hero>
      <Form>
        <Google>
          <img src="/images/google.svg" alt="google login" />
          Sign in With Google
        </Google>
      </Form>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    width: 55%;
    padding-bottom: 0px;
    font-size: 56px;
    color: #2977c9;
    font-weight: 300;
    line-height: 70px;

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
      font-weight: 400;
    }
  }
  img {
    z-index: -1;
    width: 700px;
    height: 678px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media screen and (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;

  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6),
    inset 0 0 0 2px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(0, 0, 0, 0);

  vertical-align: middle;
  z-index: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
