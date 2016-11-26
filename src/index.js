import React from 'react'; // used to create a manage components
import ReactDOM from 'react-dom'; // used to interact with the DOM

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMwwCV_8u6YefEUZoVyc__gSJwtWUYVDM';

// Create a new component. This component should produce
// some HTML.

const App = () => { // App is a class, not an instance
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container')) // instantiate components before rendering them to the DOM ( i.e. <App /> )
