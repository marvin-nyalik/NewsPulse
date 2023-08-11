import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  articles: [],
  error: null,
}

export const fetchArticles = createAsyncThunk('articles/fetch', async (query) => {
  console.log('Dispatched Action')
  const articles = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=c6499c7b470d4f49a3b7956da8075c23`);
  const toRender =  articles.data.articles.slice(0, 50);
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
