import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../slices/newsSlice';
import burgerReducer from '../slices/burgerSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    burger: burgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;