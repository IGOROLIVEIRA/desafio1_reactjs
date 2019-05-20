import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Posts from './components/Posts';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: '0',
        author: 'Igor Oliveira',
        time: 'há 3 min',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: '1',
        author: 'Jorge Oliveira',
        time: 'há 3 min',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: '2',
        author: 'João Oliveira',
        time: 'há 3 min',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: '3',
        author: 'João Oliveira',
        time: 'há 3 min',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: '4',
        author: 'João Oliveira',
        time: 'há 3 min',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Header />
        <Posts posts={posts} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
