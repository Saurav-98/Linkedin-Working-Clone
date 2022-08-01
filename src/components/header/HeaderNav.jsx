import React from 'react';

import styled from 'styled-components';

const HeaderNav = () => {
  return (
    <Nav>
      <NavListWrap>
        <NavList className="active">
          <a>
            <img src="/images/nav-home.svg" alt="" />
            <span>Home</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src="/images/nav-network.svg" alt="" />
            <span>My Network</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src="/images/nav-jobs.svg" alt="" />
            <span>Jobs</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src="/images/nav-messaging.svg" alt="" />
            <span>Messaging</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src="/images/nav-notifications.svg" alt="" />
            <span>Notifications</span>
          </a>
        </NavList>
      </NavListWrap>
    </Nav>
  );
};

export default HeaderNav;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
