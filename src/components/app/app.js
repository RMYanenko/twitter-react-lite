import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPage from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import styled from "styled-components";

const AppBlok = styled.div`
  margin: 0 auto;
  max-width: 100%;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn react", important: false, like: false, id: 1 },
        { label: "Go to learn TypeScript", important: true, like: false, id: 2 },
        { label: "Going to learn Redux", important: false, like: false, id: 3 },
        { label: "Going to learn Redux", important: false, like: false, id: 4 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.maxId = 5;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return { data: newArr };
    });
  }

  addItem = (body) => {
    console.log(body);
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  };

  onToggleImportant = (id) => {
    console.log(`Important ${id}`)
  }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);

      const old = data[index];

      const newItem = {...old, like: !old.like}

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return { data: newArr };

    })
  }

  render() {
    return (
      <div className="container">
        <AppBlok>
          <AppHeader />
          <div className="d-flex">
            <SearchPage />
            <PostStatusFilter />
          </div>
          <PostList
            posts={this.state.data}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}
          />
          <div className="">
            <PostAddForm onAdd={this.addItem} />
          </div>
        </AppBlok>
      </div>
    );
  }
}
