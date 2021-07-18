import { Component } from 'react';
import Story from './Story';

export default class Stories extends Component {
  render() {
    return (
      <div className='Stories'>
        {this.props.allStories.map((story) => {
          return <Story key={story.objectID} story={story} />;
        })}
      </div>
    );
  }
}
