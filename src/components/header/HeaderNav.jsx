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

        <User>
          <a>
            <img src="/images/user.svg" alt="" />
            <span>
              Me
              <img src="/images/down-icon.svg" alt="" />
            </span>
          </a>

          <SignOut>
            <a>Sign Out</a>
          </SignOut>
        </User>

        <Work>
          <a>
            <img src="/images/nav-work.svg" alt="" />
            <span>
              Work
              <img src="/images/down-icon.svg" alt="" />
            </span>
          </a>
        </Work>
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

const SignOut = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 40px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  img {
    width: 24px;
    border-radius: 50%;
    height: 24px;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.18);
`;
