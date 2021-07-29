import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostComments, fetchSubFilter } from '../api/reddit-api';

//Thunks
export const loadComments = createAsyncThunk(
  'postFeed/loadComments',
  async ({ index, permalink }) => {
    const comments = await fetchPostComments(permalink);
    return { index: index, comments: comments };
  },
);

//--Filter Thunks
export const loadHotPosts = createAsyncThunk(
  'postFeed/loadHotPosts',
  async subreddit => {
    const response = await fetchSubFilter(subreddit, 'hot');
    return response;
  },
);
export const loadNewPosts = createAsyncThunk(
  'postFeed/loadNewPosts',
  async subreddit => {
    const response = await fetchSubFilter(subreddit, 'new');
    return response;
  },
);
export const loadTopPosts = createAsyncThunk(
  'postFeed/loadTopPosts',
  async subreddit => {
    const response = await fetchSubFilter(subreddit, 'top');
    return response;
  },
);

//Slice
export const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
    currentSubreddit: '',
    searchTerm: '',
  },
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
      state.searchTerm = '';
    },
  },
  extraReducers: {
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

    [loadHotPosts.pending]: state => {
      console.log('pending');
      state.isLoading = true;
      state.hasError = false;
      state.posts = [];
    },
    [loadHotPosts.fulfilled]: (state, action) => {
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
    [loadHotPosts.rejected]: (state, action) => {
      console.log('error:', action.error.message);
      state.isLoading = false;
      state.hasError = true;
    },

    [loadNewPosts.pending]: state => {
      console.log('pending');
      state.isLoading = true;
      state.hasError = false;
      state.posts = [];
    },
    [loadNewPosts.fulfilled]: (state, action) => {
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
    [loadNewPosts.rejected]: (state, action) => {
      console.log('error:', action.error.message);
      state.isLoading = false;
      state.hasError = true;
    },

    [loadTopPosts.pending]: state => {
      console.log('pending');
      state.isLoading = true;
      state.hasError = false;
      state.posts = [];
    },
    [loadTopPosts.fulfilled]: (state, action) => {
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
    [loadTopPosts.rejected]: (state, action) => {
      console.log('error:', action.error.message);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

//selectors
export const selectIsLoading = state => state.postFeed.isLoading;
export const selectHasError = state => state.postFeed.hasError;
export const selectPostList = state => state.postFeed.posts;
export const selectPostFeed = state => state.postFeed;

//action creators & reducer
export const { setCurrentSubreddit } = postFeedSlice.actions;
export default postFeedSlice.reducer;
