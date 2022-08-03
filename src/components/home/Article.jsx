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
      <SharedImage>
        <a>
          <img src="/images/random-img.jpg" alt="" />
        </a>
      </SharedImage>

      <SocialCounts>
        <li>
          <button>
            <img src="/images/linke-reaction.png" alt="" />
            <img src="/images/clap-reaction.png" alt="" />
            <img src="/images/heart-reaction.png" alt="" />
            <span>2,762</span>
          </button>
        </li>
        <li>
          <button>
            <span>29 Comments </span>
          </button>
        </li>

        <li>
          <button>
            <span> 43 shares</span>
          </button>
        </li>
      </SocialCounts>
      <SocialActions>
        <li>
          <button>
            <img src="/images/like-icon.svg" alt="" />
            <span>Like</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/comment-icon.svg" alt="" />
            <span>Comment</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/share-icon.svg" alt="" />
            <span>Share</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/send-icon.svg" alt="" />
            <span>Send</span>
          </button>
        </li>
      </SocialActions>
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

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  font-size: 14px;
`;
const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  width: 95%;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 16px;
  overflow: auto;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        object-fit: cover;
        width: 24px;
        height: 24px;
        padding: 4px;
        border-radius: 50%;

        &:nth-child(2) {
          margin-left: -5px;
        }
        &:nth-child(3) {
          margin-left: -5px;
        }
      }

      span {
        margin-left: 2px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        font-weight: 700;
      }
    }

    &:nth-child(2) {
      margin-left: auto;
      margin-right: 10px;
      button {
        span {
          font-size: 13px;
          font-weight: 400;
          position: relative;

          &::after {
            content: '•';
            position: absolute;
            right: -8px;
            top: 0;
          }
        }
      }
    }

    &:nth-child(3) {
      button {
        span {
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
`;

const SocialActions = styled.ul`
  width: 100%;
  display: flex;
  padding: 4px 8px;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  li {
    button {
      display: inline-flex;
      align-items: center;
      text-align: center;
      vertical-align: middle;
      justify-content: center;
      padding: 0.4rem 1.2rem;
      transition: all 0.3s ease-in;
      border-radius: 4px;
      line-height: 1rem;

      border: none;
      cursor: pointer;

      min-height: 3.2rem;

      @media screen and (max-width: 768px) {
        padding: 0.2rem 0.6rem;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);

        span {
          color: #0a66c2;
        }
        img {
          color: #0a66c2;
        }
      }

      img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        @media screen and (max-width: 768px) {
          margin-right: 2px;
        }
      }
      span {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        margin-top: 3px;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;
