import React from "react";

import AppHeader from "../app-header";
import SearchPage from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import styled from 'styled-components';
const App = () => {
  const data = [
    { label: "Going to learn react", important: false, id: 'wer' },
    { label: "Go to learn TypeScript", important: true, id: 'err' },
    { label: "Going to learn Redux", important: false, id: 'eeq' },
    { label: "Going to learn Redux", important: false, id: 'wse' },
  ];

  return (
    <div className="container">
      <div className="app">
        <AppHeader />
        <div className="d-flex">
          <SearchPage />
          <PostStatusFilter />
        </div>
        <PostList posts={data} />
        <div className="">
          <PostAddForm />
        </div>
      </div>
    </div>
  );
};

export default App;
