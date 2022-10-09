import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,subAsync } from "./store/reducers/counter.reducer";
import Button from '@mui/material/Button';
export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      {count}
      <Button  variant="contained" onClick={() => dispatch(add(2))}>加一</Button>
      <Button variant="contained" onClick={() => dispatch(subAsync())}>減一</Button>
    </div>
  );
}
