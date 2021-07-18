import { Component } from 'react';
import Search from './Search';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light '>
        <div className='nav-elements'>
          <span>
            <img className='logo' src='./Assets/logo-hn-search.png' alt='logo'></img>
          </span>
          <span>
            <div className='navbar-brand'>
              Search
              <br /> Hacker News
            </div>
          </span>

          <Search querySearch={this.props.querySearch} />
        </div>
      </nav>
    );
  }
}
