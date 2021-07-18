import { Component } from 'react';

const debouncedSearch = (callback) => {
  let timer;

  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(value), 600);
  };
};

export default class Search extends Component {
  handleInput = (e) => {
    debouncedSearch(this.props.querySearch(e.target.value));
  };

  render() {
    return (
      <div className='input-group'>
        <div className='search-icon'>
          <i className='fas fa-search'></i>
        </div>
        <div>
          <input placeholder='Search stories by title,url, or author' onInput={this.handleInput}></input>
        </div>
      </div>
    );
  }
}
