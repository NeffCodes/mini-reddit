import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRedditPosts, fetchPostComments } from '../../api/reddit-api';

export const fetchPosts = createAsyncThunk(
  'postFeed/fetchPosts',
  async subreddit => {
    const response = await fetchRedditPosts(subreddit);
    return response;
  },
);

export const loadComments = createAsyncThunk(
  'postFeed/loadComments',
  async ({ index, permalink }) => {
    const comments = await fetchPostComments(permalink);
    return { index: index, comments: comments };
  },
);

export const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: state => {
      console.log('pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.hasError = false;
      state.posts = action.payload;
      state.posts.forEach((post, i) => {
        post.index = i;
        post.comments = [];
        post.showComments = false;
        post.isLoadingComments = false;
        post.errorComment = false;
        return post;
      });
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log('error:', action.error.message);
      state.isLoading = false;
      state.hasError = true;
    },

    [loadComments.pending]: (state, action) => {
      console.log('comments pending');
      state.posts[action.meta.arg.index].isLoadingComments = true;
      state.posts[action.meta.arg.index].showComments = false;
      state.posts[action.meta.arg.index].errorComment = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      console.log('comments fulfilled');
      state.posts[action.meta.arg.index].isLoadingComments = false;
      state.posts[action.meta.arg.index].showComments = true;
      state.posts[action.payload.index].comments = action.payload.comments;
      state.posts[action.meta.arg.index].errorComment = false;
    },
    [loadComments.rejected]: (state, action) => {
      console.log('comments error:', action.error.message);
      state.posts[action.meta.arg.index].isLoadingComments = false;
      state.posts[action.meta.arg.index].showComments = false;
      state.posts[action.meta.arg.index].errorComment = true;
    },
  },
});

//selectors
export const selectIsLoading = state => state.postFeed.isLoading;
export const selectHasError = state => state.postFeed.hasError;
export const selectPostList = state => state.postFeed.posts;
export const selectSubreddit = state => state.postFeed;

//action creators & reducer
export default postFeedSlice.reducer;
