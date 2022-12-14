import React from 'react';
import styled from 'styled-components';

const LoginNavbar = () => {
  return (
    <Nav>
      <a href="/">
        <img src="/images/login-logo.svg" alt="Linkedin Login Logo" />
      </a>

      <div>
        <Join> Join now</Join>
        <SignIn>Sign in</SignIn>
      </div>
    </Nav>
  );
};

export default LoginNavbar;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  a {
    width: 135px;
    height: 34px;

    @media screen and (max-width: 700px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 01px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition: all 0.25s ease-in-out;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;
