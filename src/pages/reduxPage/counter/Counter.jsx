import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span className="mx-3">{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};

export default Counter;
