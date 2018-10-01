import React, { Component } from 'react';
import './hashtags.css';

class Hashtags extends Component {
  constructor() {
    super();
    this.state = {
      hashtags: []
    }
  }

  componentDidMount() {
    fetch('/api/hashtags')
      .then(res => res.json())
      .then(hashtags => this.setState({hashtags}, () => console.log('Hashtags fetched..',hashtags)));
  }

  render() {
    return (
      <div>
        <h2>Hashtags</h2>
        <ul>
          {this.state.hashtags.map(hashtag =>
            <li key={hashtag.id}> { hashtag.tag } </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Hashtags;
