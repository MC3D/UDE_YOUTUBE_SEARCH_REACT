import React, { Component } from 'react'; // {} means import react and pull off the prop component as a var called component

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  _handleInput(term) {
    this.setState({term})
    this.props.handleInput(term);
  }

  render() {
    // input is a controlled component (value is controlled by state)
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this._handleInput(event.target.value)}/>
      </div>
    );

  }

  // handleInput(event) {
  //   this.setState({ search_term: event.target.value });
  // }
}

export default SearchBar;
