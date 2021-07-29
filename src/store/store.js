import { configureStore } from '@reduxjs/toolkit';
import postFeedReducer from './postFeedSlice';
import subredditListReducer from './AsideSubredditSlice';

export const store = configureStore({
  reducer: {
    postFeed: postFeedReducer,
    subredditList: subredditListReducer,
  },
});
