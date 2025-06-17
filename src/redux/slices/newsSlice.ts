import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { NewsState } from "../../types/types";
import type { ArticleProps } from "../../types/types";

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<
  ArticleProps[],
  { year: number; month: number }
>("news/fetchNews", async ({ year, month }) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=zdRj5AvsGD8Zm8YLQCX8eeLrKeQ7janI`
  );
  const result = await response.json();
  return result.response.docs;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        const existingIds = new Set(state.articles.map((a) => a._id));
        const newArticles = action.payload.filter(
          (a) => !existingIds.has(a._id)
        );

        state.articles = [...newArticles, ...state.articles];
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching news";
      });
  },
});

export default newsSlice.reducer;
