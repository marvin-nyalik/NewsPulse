import {configureStore, combineReducers} from '@reduxjs/toolkit';
import articleSlice from './articles/articleSlice';
import sourceSlice from './sources/sourceSlice';

const rootReducer = combineReducers({
  articles: articleSlice,
  sources: sourceSlice,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store;
