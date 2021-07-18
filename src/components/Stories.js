import { Component } from 'react';
import Story from './Story';

export default class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log(this.state.allStories);
    return (
      <div className='Stories'>
        {this.props.allStories.map((story, index) => {
          return <Story story={story} />;
        })}
      </div>
    );
  }
}
