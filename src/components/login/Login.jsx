import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import LoginNavbar from './LoginNavbar';

const Login = () => {
  return (
    <Container>
      <LoginNavbar />
      <HeroSection />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 0px;
`;
