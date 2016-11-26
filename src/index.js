import React from 'react'; // used to create a manage components
import ReactDOM from 'react-dom'; // used to interact with the DOM

// Create a new component. This component should produce
// some HTML.

const App = () => { // App is a class, not an instance
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container')) // instantiate components before rendering them to the DOM ( i.e. <App /> )
