/* Import the React and ReactDOM libraries */
import React from 'react';
import ReactDOM from 'react-dom'; // DOM=document object model ie document element model like html. NOTE ReactDOM takes react components and displays them onto documents.

/* Create a React component: either a function or a class 
REVIEW why is app with capital A?
*/
const App = () => {

    function getButtonText() {
        return 'Click me!';
    }

    return (
        // NOTE convention: double quotes for jsx values, single for non-jsx values.
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}    
            </button> 
        </div> // NOTE html to jsx: 1) style value is not string, but an object. first {} means js variable, second {} means object. property instead of css syntax becomes js object syntax. 2) class attribute -> className to avoid clashing with js 'class' declaration. but modern compilers can understand the class attribute here is in jsx. nevertheless it's just in case.3) object cannot be used as displayed content within the tags. ie. can't use object in place of getButtonText() in the {}. error message: object cannot be react child 4) there are more differences but you can find them in cONSOLE:)
        // original html: <button style="background-color: blue; color: white;">Submit</button> // semicolon in style string is like css
    ); // the html-looking ting is jsx 
};

/* Take component and show it on the screen */
ReactDOM.render(
    <App />, // App element exists in this code. 
    document.querySelector('#root') // referencing root id element in index.html
); 