import React from 'react';
import styled from 'styled-components';

const Article = () => {
  return (
    <ArticleContainer>
      <ShareActor>
        <a>
          <img src="/images/user.svg" alt="" />
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
        </a>
        <button>
          <img src="/images/ellipsis.svg" alt="" />
        </button>
      </ShareActor>
      <Description>Description</Description>
    </ArticleContainer>
  );
};

export default Article;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;

  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
`;

const ArticleContainer = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const ShareActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 0.75rem;
    top: 0.2rem;
    background: transparent;
    border: none;
    outline: none;
    width: 24px;
    height: 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Description = styled.div;

const SharedImg = styled.div``;
