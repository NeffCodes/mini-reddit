import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { PostFeed } from '../Post/PostFeed';

const mockSlice = createSlice({
  name: 'postFeed',
  initialState: {
    posts: [
      {
        subreddit: 'ASubreddit',
        subreddit_name_prefixed: 'r/ASubreddit',
        title: 'A title',
        timeStamp: 2,
        author: 'A Author',
        thumbnail: 'https://via.placeholder.com/96',
        num_comments: 251,
      },
      {
        subreddit: 'BSubreddit',
        subreddit_name_prefixed: 'r/BSubreddit',
        title: 'B title',
        timeStamp: 5,
        author: 'B Author',
        thumbnail: 'https://via.placeholder.com/96',
        num_comments: 23,
      },
    ],
  },
});

describe('Post Feed', () => {
  let context;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore({ reducer: { postFeed: mockSlice.reducer } });
    context = render(
      <Provider store={mockStore}>
        <PostFeed />
      </Provider>,
    );
  });

  it('displays the posts', () => {
    const { queryByTestId } = context;
    expect(queryByTestId('ASubreddit')).not.toBeNull();
    expect(queryByTestId('BSubreddit')).not.toBeNull();
  });
});
