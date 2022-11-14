import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter is {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {isLogged ? <h3>valuable info</h3> : ""}
    </div>
  );
};

export default App;
