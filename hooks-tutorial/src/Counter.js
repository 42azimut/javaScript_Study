import React, { useReducer, useState } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "ZERO":
      return { value: (state.value = 0) };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 }); //카운터 기본값 0으로 설정

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "ZERO" })}>0</button>
    </div>
  );
};

export default Counter;
