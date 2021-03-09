import React from "react";

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  margin: 15px 0;
  h1 {
    font-size: 26px;
    :hover {
      transition: 0.6s;
      color: #1DA1F2;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
  return (
      <Header>
          <h1>Roman Yanenko</h1>
          <h2>{allPosts} posts, of which like {liked}</h2>
      </Header>
  );
};

export default AppHeader;
