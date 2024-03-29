import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      {/* NOTE Anything within ApprovalCard tags in index.js becomes field of children in props object */}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
