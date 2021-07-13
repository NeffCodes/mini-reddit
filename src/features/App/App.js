import React from 'react';
import './App.css';

import { mockPostData } from '../../utils/mockData';

import PostFeed from '../Post/PostFeed';

function App() {
  return (
    <>
      <PostFeed posts={mockPostData} loadPosts={() => {}} />
    </>
  );
}

export default App;
