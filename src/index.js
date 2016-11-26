import React, { Component } from 'react'; // used to create a manage components
import ReactDOM from 'react-dom'; // used to interact with the DOM
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBMwwCV_8u6YefEUZoVyc__gSJwtWUYVDM';

// Create a new component. This component should produce
// some HTML.
class App extends Component { // App is a class, not an instance
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YouTubeSearch({key: API_KEY, term: 'dogs'}, videos =>  {
      this.setState({ videos });
      // this.setState({ videos: videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// Take this component's generated HTML and put it
// on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container')); // instantiate components before rendering them to the DOM ( i.e. <App /> )
