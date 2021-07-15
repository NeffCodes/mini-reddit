import { configureStore } from '@reduxjs/toolkit';
import postFeedReducer from '../features/Post/postFeedSlice';

export const store = configureStore({
  reducer: {
    postFeed: postFeedReducer,
  },
});
