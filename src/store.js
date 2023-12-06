import { configureStore, createSlice } from "@reduxjs/toolkit";

// 현재 페이지를 나타냄
let page = createSlice({
  name: "page",
  initialState: 0,
  reducers: {
    setPage(state, action) {
      return action.payload;
    },
  },
});
export let { setPage } = page.actions;

let pages = createSlice({
  name: "pages",
  initialState: 0,
  reducers: {
    setPages(state, action) {
      return action.payload;
    },
  },
});
export let { setPages } = pages.actions;

export default configureStore({
  reducer: {
    page: page.reducer,
    pages: pages.reducer,
  },
});