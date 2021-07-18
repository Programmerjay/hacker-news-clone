import { Component } from 'react';

export default class Story extends Component {
  render() {
    const date = new Date(this.props.story.created_at);
    return (
      <article className='story'>
        <div className='story-container'>
          <div className='story-data'>
            <div className='story-title'>
              <a href={this.props.story.url}>
                <span>{this.props.story.title}</span>
              </a>
              <a href={this.props.story.url} className='Story-link'>
                ({this.props.story.url})
              </a>
            </div>
            <div className='story-meta'>
              <span>{this.props.story.points} points</span>
              <span> | </span>
              <span>{this.props.story.author} </span>
              <span> | </span>
              <span>{`${date.toDateString()} ${date.toLocaleTimeString()}`} </span>
              <span> | </span>
              <span>{this.props.story.num_comments} comments </span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
