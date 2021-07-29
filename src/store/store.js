import { configureStore } from '@reduxjs/toolkit';
import postFeedReducer from '../features/Post/postFeedSlice';
import subredditListReducer from '../features/Subreddits/AsideSubredditSlice';

export const store = configureStore({
  reducer: {
    postFeed: postFeedReducer,
    subredditList: subredditListReducer,
  },
});
