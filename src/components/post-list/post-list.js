import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleLiked, onToggleImportant }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ListGroupItem className="mt-2" key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </ListGroupItem>
    );
  });

  return <ListGroup>{elements}</ListGroup>;
};

export default PostList;
