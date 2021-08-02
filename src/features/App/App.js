import React from 'react';
import './App.css';

import PostFeed from '../Post/PostFeed';
import AsideSubs from '../Subreddits/AsideSubreddit';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <PostFeed className= 'list' />
        <AsideSubs className= 'side' />
      </main>
    </>
  );
}

export default App;
