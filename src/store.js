import { configureStore, createSlice } from "@reduxjs/toolkit";

// // 현재 페이지를 나타냄
// let page = createSlice({
//   name: "page",
//   initialState: 0,
//   reducers: {
//     setPage(state, action) {
//       return action.payload;
//     },
//   },
// });
// export let { setPage } = page.actions;

// let pages = createSlice({
//   name: "pages",
//   initialState: 0,
//   reducers: {
//     setPages(state, action) {
//       return action.payload;
//     },
//   },
// });
// export let { setPages } = pages.actions;

// // component/info/InfoDetail*.js
// let infoTab = createSlice({
//   name: "infoTab",
//   initialState: 0,
//   reducers: {
//     setInfoTab(state, action) {
//       return action.payload;
//     },
//   },
// });
// export let { setInfoTab } = infoTab.actions;

let isProjectOpen = createSlice({
  name: "isProjectOpen",
  initialState: false,
  reducers: {
    toggleIsProjectOpen(state, action) {
      return action.payload;
    },
  },
});
export let { toggleIsProjectOpen } = isProjectOpen.actions;

let openedProject = createSlice({
  name: "openedProject",
  initialState: 0,
  reducers: {
    setOpenedProject(state, action) {
      return action.payload;
    },
  },
});
export let { setOpenedProject } = openedProject.actions;

export default configureStore({
  reducer: {
    // page: page.reducer,
    // pages: pages.reducer,
    // infoTab: infoTab.reducer,
    isProjectOpen: isProjectOpen.reducer,
    openedProject: openedProject.reducer,
  },
});
