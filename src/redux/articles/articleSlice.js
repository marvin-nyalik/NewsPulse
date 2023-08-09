import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  articles: [],
  error: null,
}

export const fetchArticles = createAsyncThunk('articles/fetch', async (query) => {
  const articles = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=a13632d1833f4bfbbe49b4ec53c7bc37`);
  const toRender =  articles.data.articles.slice(0, 100);
  return toRender;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })

      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
  }
})

export default articleSlice.reducer;
