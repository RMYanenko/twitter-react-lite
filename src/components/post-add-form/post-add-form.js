import React from "react";

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex justify-content-between">
      <input type="text" placeholder="add post" className="form-control new-post-label" />
      <button 
        type="submit" 
        className="btn btn-outline-secondary"
        onClick={ () => onAdd('hello')}
      >Add post</button>
    </div>
  );
};

export default PostAddForm;
