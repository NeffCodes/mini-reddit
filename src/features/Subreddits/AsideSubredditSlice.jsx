import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAsideList } from '../../api/reddit-api';

export const loadSubreddits = createAsyncThunk('subredditList', async () => {
  const response = await fetchAsideList();
  return response;
});

const subredditListSlice = createSlice({
  name: 'subredditList',
  initialState: {
    subreddits: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadSubreddits.pending]: state => {
      console.log('aside pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSubreddits.fulfilled]: (state, action) => {
      console.log('aside fulfilled');
      state.isLoading = false;
      state.hasError = false;
      state.subreddits = action.payload;
    },
    [loadSubreddits.rejected]: (state, action) => {
      console.log('aside error', action.error.message);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

//selectors
export const selectSubreddits = state => state.subredditList.subreddits;

//action creators & reducer
export default subredditListSlice.reducer;
