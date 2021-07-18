import { Component } from 'react';

export default class Loader extends Component {
  render() {
    return <>{this.props.isLoading && <i className='fas fa-spinner'></i>}</>;
  }
}
