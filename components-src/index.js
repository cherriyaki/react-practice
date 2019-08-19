/* this is like the 'main' file

stylesheet in index.html in public links to semantic.min.css link in semantic ui cdn. to write the jsx to be formatted by that stylesheet, refer to semantic ui website and the <> button.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment'; // NOTE Comment.js is in the same src directory, that's why ./ is used.
import ApprovalCard from './ApprovalCard';

/* create React components */
// NOTE App is a functional component. Functional components are used to simply display content. Class-based components are good for just about anything else.
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          poster="Sam"
          time="Today at 4:00PM"
          message="Beautifully written!"
          img={faker.image.avatar()}
        />
        {/* NOTE poster is one of the properties (props) passed to the component. prop name can be anything. */}
        {/* NOTE components are the exception to the 'js variables in {}' rule. components are in jsx tags!   */}
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          poster="Alex"
          time="Yesterday at 6:15AM"
          message="Splendid blog post! I will bookmark this page."
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          poster="Jane"
          time="Monday at 1:57PM"
          message="You have an amazing talent for writing. Keep it up."
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

/* display components on screen */
ReactDOM.render(<App />, document.querySelector('#root'));
