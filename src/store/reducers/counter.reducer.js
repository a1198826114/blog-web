import { createSlice } from "@reduxjs/toolkit";
const counter = createSlice({
  name: "counter", //命名空间，用来加载action.type前面，可以不用再用常量去写
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action) {
        console.log(state,action)
      //内置了immutable.js
      state.count++;
    },
    sub(state, action) {
      state.count--;
    },
  },
});
//定义action
export const { add ,sub} = counter.actions;

export const subAsync = (payload) => {
  return async (dispatch) => {
    setTimeout(() => {
        dispatch(sub())
    }, 3000);
  };
};

export default counter.reducer;
