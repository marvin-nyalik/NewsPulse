import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  sources: [],
  error: null,
}

export const fetchSources = createAsyncThunk('sources/fetch', async () => {
  const sources = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=c6499c7b470d4f49a3b7956da8075c23');
  const sourceNames = sources.data.sources.map((source) => ({
    name: source.name,
    id: source.id,
    url: source.url,
  }));
  return sourceNames;
});

const sourceSlice = createSlice({
  name: 'sources',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSources.pending, (state) => {
        state.loading = false;
      })

      .addCase(fetchSources.fulfilled, (state, action) => {
        state.loading = false;
        state.sources = action.payload;
      })

      .addCase(fetchSources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default sourceSlice.reducer;
