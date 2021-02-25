import React from "react";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ posts }) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <ListGroupItem className="app-list" key={id} >
        <PostListItem {...itemProps} />
      </ListGroupItem>
    );
  });

  return (
    <ListGroup>
      {elements}
    </ListGroup>
    );
};

export default PostList;
