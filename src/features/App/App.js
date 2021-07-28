import React from 'react';
import './App.css';

import PostFeed from '../Post/PostFeed';
import AsideSubs from '../Subreddits/AsideSubreddit';

function App() {
  return (
    <>
      <main>
        <PostFeed className="list" />
        <AsideSubs className="side" />
      </main>
    </>
  );
}

export default App;
