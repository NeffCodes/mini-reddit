import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { delayedMockPostData } from '../../utils/mockData';
import { fetchRedditPosts } from '../../api/reddit-api';

export const fetchPosts = createAsyncThunk(
  'postFeed/fetchPosts',
  async subreddit => {
    const response = await fetchRedditPosts(subreddit);
    return response;
  },
);

export const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
    hasLoaded: false,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: state => {
      console.log('pending');
      state.isLoading = true;
      state.hasError = false;
      state.hasLoaded = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.hasError = false;
      state.hasLoaded = true;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log('error');
      state.isLoading = false;
      state.hasError = true;
      state.hasLoaded = false;
    },
  },
});

//selectors
export const selectIsLoading = state => state.postFeed.isLoading;
export const selectHasError = state => state.postFeed.hasError;
export const selectPosts = state => state.postFeed.posts;

//reducer
export default postFeedSlice.reducer;
