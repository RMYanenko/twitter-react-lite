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
        {
          label: "Go to learn TypeScript",
          important: true,
          like: false,
          id: 2,
        },
        { label: "Going to learn Redux", important: false, like: false, id: 3 },
        { label: "Going to learn Redux", important: false, like: false, id: 4 },
      ],
      term: "",
      filter: "all",
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
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);

      const old = data[index];

      const newItem = { ...old, important: !old.important };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return { data: newArr };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);

      const old = data[index];

      const newItem = { ...old, like: !old.like };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return { data: newArr };
    });
  };

  searchPosts = (items, term) => {
    if (items.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPosts(data, term), filter);

    return (
      <div className="container">
        <AppBlok>
          <AppHeader liked={liked} allPosts={allPosts} />
          <div className="d-flex">
            <SearchPage onUpdateSearch={this.onUpdateSearch} />
            <PostStatusFilter
              filter={filter}
              onFilterSelect={this.onFilterSelect}
            />
          </div>
          <PostList
            // posts={this.state.data}
            posts={visiblePosts}
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
