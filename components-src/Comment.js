/* kinda like a Class file in java?
the component here is Comment.
*/

import React from 'react';
// NOTE no need ReactDOM cuz this is just code for one component. the showing up on screen is done in the index.js file

/* NOTE component function takes argument (conventionally called props, short for PROPERTIES), an object whose fields are values for customising this component */
const Comment = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.poster}
          {/* references the poster field of props object. poster was passed as an attribute in index.js <Comment /> component */}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
};

export default Comment; // NOTE like public keyword in java: makes this component available for other files to use
